// Run this at the root level of backend folder
// using the command:
import 'dotenv/config';
import mongoose from 'mongoose';

import Spell from '../models/Spell.js';
import SPELLS from '../constants/spells.js';

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
  await Spell.deleteMany({});
  await Spell.insertMany(SPELLS);
};

seedDB().then(() => {
  console.log('Successfully seeded SPELLS, now closing connection.');
  mongoose.connection.close();
});
