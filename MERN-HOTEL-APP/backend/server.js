// Importing required packages
import express from 'express'; // A fast, unopinionated, minimalist web framework for Node.js used to create APIs and handle HTTP requests.
import cors from 'cors'; // Middleware to enable Cross-Origin Resource Sharing, allowing your API to be accessed from different domains.
import 'dotenv/config'; // Automatically loads environment variables from a .env file into process.env.
import mongoose from 'mongoose'; // ODM (Object Data Modeling) library for MongoDB, making it easier to interact with your database.
import cookieParser from 'cookie-parser'; // Middleware to parse cookies from incoming HTTP requests.

import userRoutes from './routes/userRoutes.js'; // Importing routes for user-related endpoints.
import authRoutes from './routes/authRoutes.js'; // Importing routes for authentication-related endpoints.

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {}) // Establish a connection to the MongoDB database using the connection string in .env.
  .then(() => console.log('Connected to MongoDB')) // Log success message if the connection is established.
  .catch((err) => console.error('MongoDB connection error:', err)); // Log error if the connection fails.

const app = express(); // Initialize the Express application.

// Middleware: Functions that process incoming requests before they reach your routes.
app.use(express.json()); // Parses incoming JSON payloads, making it accessible via req.body.
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (e.g., form submissions).
app.use(cookieParser()); // Enables the server to parse cookies from client requests.
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
// Configures CORS to allow requests from the frontend URL defined in .env.
// credentials: true ensures cookies are sent with requests.

// Start the server
app.listen(3000, () => {
  console.log('server running on http://localhost:3000'); // Log the server's URL for access.
});

// A test endpoint to verify that the server is running correctly.
app.get('/api/test', async (req, res) => {
  res.json({ message: 'hello from express endpoint' }); // Responds with a simple JSON message.
});

// Routes: Organize your API endpoints into separate files for modularity.
app.use('/api/users', userRoutes); // Routes for handling user-related requests (e.g., fetching user data).
app.use('/api/auth', authRoutes); // Routes for handling authentication-related requests (e.g., login, signup).
