// Import Modules
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// Import Routes
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import championRoutes from './routes/championRoutes.js';

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Initialize Express Application
const app = express();

// Middleware
app.use(cookieParser()); // Turns the long string of cookies into an easy to handle Javascript Object
app.use(express.json()); // Parse incoming request bodies as JSON and URL-encoded
app.use(express.urlencoded({ extended: true }));
// Enable CORS for the frontend URL
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/champions', championRoutes);
// app.use('/api/champions/:id', championRoutes);

// Start the Server
// Use environment variable for port or fallback to 3000
const BACKEND_PORT = process.env.BACKEND_PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on localhost ${BACKEND_PORT}`);
});
