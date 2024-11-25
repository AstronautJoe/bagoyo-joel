// server.js
const express = require('express');
const mongoose = require('mongoose');

// To use our.env variable
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectToDatabase();
});
