import jwt from 'jsonwebtoken';

// like a guard that checks if you have the token/ticket
const authMiddleware = (request, response, next) => {
  const authHeader = request.header('Authorization');
  if (!authHeader) {
    return response
      .status(400)
      .json({ error: 'No token found, authorization denied. ' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return response
      .status(401)
      .json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    next();
  } catch (error) {
    if (!error.name === 'TokenExpiredError') {
      return response.status(401).json({ error: 'Token Expired' });
    }
    return response.status(401).json({ error: 'Invalid Token' });
  }
};

export default authMiddleware;
