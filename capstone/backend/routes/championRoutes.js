import express from 'express';
import Champion from '../models/Champion.js';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// Get All champions
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

// Get champions by id
router.get('/:id', async (req, res) => {
  const championId = req.params.id;
  try {
    const champion = await Champion.findById(championId);
    if (!champion) return res.status(404).json({ error: 'Champion not found' });
    return res.status(200).json(champion);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: 'Server Error: Could not find champion.' });
  }
});

export default router;
