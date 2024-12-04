import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test endpoint
app.get('/api/test', async (req, res) => {
  res.json({ message: 'hello from express endpoint' });
});

// Start the server
app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
