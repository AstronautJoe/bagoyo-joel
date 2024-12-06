// We will be using multer for a multi part form and for images
import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import Hotel from '../models/Hotel';
import verifyToken from '../middleware/auth';

const router = express.Router();

// Tell multer to we want to store any files directly to cloudinary
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB Max file size
  },
});

// api/my-hotels
router.post(
  '/',
  verifyToken,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('country').notEmpty().withMessage('Country is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('type').notEmpty().withMessage('Hotel Type is required'),
    body('pricePerNight')
      .notEmpty()
      .isNumeric()
      .withMessage('Per per night is required and must be a number'),
    body('facilities')
      .notEmpty()
      .isArray()
      .withMessage('Facilities are required'),
  ],
  // Multer will handle image file validation
  upload.array('imageFiles', 6),
  async (req, res) => {
    try {
      const imageFiles = req.files;
      const newHotel = req.body;

      // Upload images to cloudinary and recieve the url to the uploaded image
      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString('base64'); // process image to base 64 string for cloudinary
        // encode image as a logn base64 string
        let dataURI = 'data:' + image.mimetype + ';base64,' + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });

      // wait for all images to be uploaded before we get imageUrls
      const imageUrls = await Promise.all(uploadPromises);

      // add all this in the new hotel object
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      // Save the new hotel in our database
      const hotel = new Hotel(newHotel);
      await hotel.save();

      // Return a 201 status
      res.status(201).send(hotel);
    } catch (error) {
      console.log('Error creating hotel: ', error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

export default router;
