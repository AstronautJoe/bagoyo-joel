// Import Modules
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Loads environment variables from .env file
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'; // Parses cookies for request handling
import { v2 as cloudinary } from 'cloudinary';

// Import routes
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import myHotelRoutes from './routes/myHotelRoutes.js';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Initialize Express Application
const app = express();

// Middleware
app.use(cookieParser()); // Turns the long string of cookies into an easy to handle Javascript Object
app.use(express.json()); // Parse incoming request bodies as JSON and URL-encoded
app.use(express.urlencoded({ extended: true }));
// Enable CORS for the frontend URL
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/my-hotels', myHotelRoutes);

// Start the server
app.listen(3000, () => {
  console.log('server running on localhost 3000');
});
