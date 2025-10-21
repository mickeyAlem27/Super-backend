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
  createAccount,
  deleteAccount,
  hardDeleteAccount,
} = require('../controllers/userAccountController');

// Public route for creating an account (registration)
router.post('/register', createAccount);

// Route for creating an account (with authentication)
router.post('/create', authenticateToken, createAccount);

// Apply authentication middleware to protected routes
router.get('/profile', authenticateToken, getCurrentUserProfile);
router.put('/profile', authenticateToken, updateCurrentUserProfile);
router.put('/password/change', authenticateToken, changePassword);
router.post('/password/forgot', forgotPassword);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);

// Delete current user's account
router.delete('/delete', authenticateToken, deleteAccount);

// Hard delete any account by ID (admin or authorized user)
router.delete('/delete/:id', authenticateToken, hardDeleteAccount);

module.exports = router;