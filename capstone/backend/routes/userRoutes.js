import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.post(
  '/register',
  [
    check('displayName', 'Display Name is required').isString(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password with 6 or more characters required').isLength({
      min: 6,
    }),
    check('role', 'role is required').isString(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      let user = await User.findOne({
        email: req.body.email,
      });

      let userWithEmail = await User.findOne({
        email: req.body.email,
      });

      let userWithDisplayName = await User.findOne({
        displayName: req.body.displayName,
      });

      if (userWithEmail || userWithDisplayName) {
        return res
          .status(400)
          .json({ message: 'Email Address or username is taken' });
      }

      user = new User(req.body);
      await user.save();

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d',
      });

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000,
      });
      return res.status(200).send({ message: 'User registered successfully!' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Something went wrong' });
    }
  }
);

export default router;
