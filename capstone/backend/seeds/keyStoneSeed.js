// Run this at the root level of backend folder
// using the command:
import 'dotenv/config';
import mongoose from 'mongoose';

import KeyStone from '../models/KeyStone.js';
import KEYSTONES from '../constants/keyStones.js';

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
  await KeyStone.deleteMany({});
  await KeyStone.insertMany(KEYSTONES);
};

seedDB().then(() => {
  console.log('Successfully seeded RUNES, now closing connection.');
  mongoose.connection.close();
});
