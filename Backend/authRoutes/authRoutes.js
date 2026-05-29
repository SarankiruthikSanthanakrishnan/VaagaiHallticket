const express = require('express');
const {
  login,
  getuser,
  logout,
  adminLogin,
  getAllStudents,
} = require('../authControllers/authController');

const verifyToken = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

const router = express.Router();

router.post('/login', login);
router.get('/profile', verifyToken, getuser);
router.get('/logout', logout);

router.post('/admin/login', adminLogin);
router.get('/admin/students', adminAuth, getAllStudents);

module.exports = router;
