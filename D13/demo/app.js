// Entry point of the application
const express = require('express');
const mongoose = require('mongoose');

// To use our.env variable
require('dotenv').config();

// Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB, aysnc function because it takes time to work
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectToDatabase();
});

// mongodb+srv://jpbagoyo:wR6WYSQtuE0oWOyK@cluster0.d665o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
