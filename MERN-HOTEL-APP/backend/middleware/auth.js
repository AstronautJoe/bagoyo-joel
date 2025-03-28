import jwt from 'jsonwebtoken';
const verifyToken = (req, res, next) => {
  const token = req.cookies['auth_token'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    //verify the token and extract the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};
export default verifyToken;
