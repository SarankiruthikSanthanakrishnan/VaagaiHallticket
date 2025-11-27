const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    const decoded = jwt.verify(token, process.env.SECRETKEY);

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token!' });
  }
};

module.exports = verifyToken;
