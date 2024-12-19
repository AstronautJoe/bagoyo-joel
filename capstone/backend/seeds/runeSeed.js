// Run this at the root level of backend folder
// using the command:
import 'dotenv/config';
import mongoose from 'mongoose';

import Rune from '../models/Rune.js';
import RUNES from '../constants/runes.js';

// Connect to MongoDB
console.log('Mongo URI:', process.env.MONGO_URI); // Add this line for debugging
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

const seedDB = async () => {
  // DELETES everything in that collection
  await Rune.deleteMany({});
  await Rune.insertMany(RUNES);
};

seedDB().then(() => {
  console.log('Successfully seeded RUNES, now closing connection.');
  mongoose.connection.close();
});
