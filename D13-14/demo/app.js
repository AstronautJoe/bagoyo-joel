// Entry point of the application
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

// To start application normally use:
// npm run start

// To automatically restart application while making changes use:
// npm run dev

// To use our.env variable
require('dotenv').config();

// Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB, aysnc function because it takes time to work
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

// Routes
app.use('/todos', todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectToDatabase();
});
