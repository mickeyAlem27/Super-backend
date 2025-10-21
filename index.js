require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('./controlers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/supper-app', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Supper APP Backend!' });
});

// User routes
app.post('/users', createUser); // Create user
app.get('/users', getUsers); // Get all users
app.get('/users/:id', getUserById); // Get user by ID
app.put('/users/:id', updateUser); // Update user
app.delete('/users/:id', deleteUser); // Delete user

// Example route to get users (keeping for backward compatibility)
app.get('/old-users', async (req, res) => {
  try {
    const users = await User.find({ isDeleted: false });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});