// Run this at the root level of backend folder
import 'dotenv/config';
import mongoose from 'mongoose';

import Champion from '../models/Champion.js';
import CHAMPIONS from '../constants/champions.js';

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
  await Champion.deleteMany({});
  await Champion.insertMany(CHAMPIONS);
};

seedDB().then(() => {
  console.log('Successfully seeded, now closing connection.');
  mongoose.connection.close();
});
