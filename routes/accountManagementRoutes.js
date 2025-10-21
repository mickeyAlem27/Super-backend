const express = require('express');
const router = express.Router();
const {
  loginUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  changePassword,
  forgotPassword,
  logoutUser,
  authenticateToken,
} = require('../controllers/userAccountController');

// Apply authentication middleware to protected routes
router.get('/profile', authenticateToken, getCurrentUserProfile);
router.put('/profile', authenticateToken, updateCurrentUserProfile);
router.put('/password/change', authenticateToken, changePassword);
router.post('/password/forgot', forgotPassword);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);

module.exports = router;