import express from 'express';
import Champion from '../models/Champion.js';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.get('', async (req, res) => {
  try {
    const champions = await Champion.find({}).sort('name'); // Sorted alphabetically by default
    return res.status(200).json(champions);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: 'Something went wrong in fetching champions' });
  }
});

export default router;
