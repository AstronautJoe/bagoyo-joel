// Import the mongoose library
import mongoose from 'mongoose';

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      // Deprecated
      // useNewUrlParser: true, // Enables the new URL string parser for compatibility
      // useUnifiedTopology: true, // Enables the new server discovery and monitoring engine
    });
    console.log('MongoDB connected successfully'); // Log success message if connected
  } catch (error) {
    // Log an error message if the connection fails
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a failure code (1) if there's an error
  }
};

// Export the connectDB function so it can be used in other files
export default connectDB;
