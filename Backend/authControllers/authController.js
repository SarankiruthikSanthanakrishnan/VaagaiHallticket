const db = require('../config/db');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const login = async (req, res) => {
  const { regno, dob } = req.body;

  if (!regno || !dob) {
    return res.status(400).json({
      message: 'பதிவு எண் மற்றும் பிறந்த தேதி தேவை!',
    });
  }

  try {
    const [rows] = await db.query(
      'SELECT * FROM students where register_number=? and dob=?',
      [regno, dob]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'தவறான உள்ளீடுகள்!' });
    }
    const token = jwt.sign({ id: rows[0].id }, process.env.SECRETKEY, {
      expiresIn: process.env.EXPIRESIN,
    });
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      domain: 'vaagaihallticket.onrender.com',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: `உள்நுழைகிறது வணக்கம் ${rows[0].name_english}`,
    });
  } catch (error) {
    console.log('Error', error.message);
    return res.status(500).json({ message: 'Server Error!' });
  }
};
const getuser = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT id, register_number, DATE(dob) AS dob, app_no, course_code, course_name, name_tamil, name_english, phone_no FROM students WHERE id = ?',
      [req.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server Error!' });
  }
};

const logout = async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    domain: 'vaagaihallticket.onrender.com',
  });

  return res.status(200).json({ message: 'Logged out successfully!' });
};

// admin login
const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (username !== 'admin' || password !== 'admin123') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ admin: true }, process.env.SECRETKEY, {
    expiresIn: '7d',
  });

  res.cookie('admintoken', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  console.log('🔥 Admin Login Cookie Sent →', token);

  res.json({ message: 'Admin logged in successfully' });
};

const getAllStudents = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM students ORDER BY id ASC');
  res.json(rows);
};

module.exports = { login, getuser, logout, adminLogin, getAllStudents };
