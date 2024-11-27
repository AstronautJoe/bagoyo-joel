import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register a new user
const register = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    // Send a success response
    response
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

// Log in as an existing user
const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) return response.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return response.status(400).json({ error: 'Invalid credentials' });

    //generate a JWT (JSON Web Token) with the user's ID as the payload
    // Generate a JSON Web Token (JWT) for the authenticated user
    const token = jwt.sign(
      // Payload: The data you want to embed in the token
      { _id: user._id }, // Embed the user's unique ID in the token's payload
      process.env.JWT_SECRET, // Used to sign the token and verify its authenticity
      {
        expiresIn: '1h', // Set the token to expire in 1 hour (after which it will no longer be valid)
      }
    );
    response.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    response.status(500).json({ error: 'Server error' });
  }
};

export { register, login };
