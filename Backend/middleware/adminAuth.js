const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
  const token = req.cookies.admintoken;
  if (!token) {
    return res.status(403).json({ message: 'Admin not logged in' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    console.log('✔ Admin Token Decoded →', decoded);

    if (!decoded.admin) {
      return res.status(403).json({ message: 'Not an admin token' });
    }

    req.admin = true;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = adminAuth;
