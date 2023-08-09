const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { isAuthenticated, isAdmin, getUser } = require('../middleware/auth')

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users
router.get('/', isAdmin, async (req, res) =>   {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
});

// Get a specific user
router.get('/:id', isAdmin, (req, res) => {
  res.json(req.user);
});

// Update a user
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.first_name != null) {
    res.user.first_name = req.body.first_name;
  }
  if (req.body.last_name != null) {
    res.user.last_name = req.body.last_name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.user.phone = req.body.phone;
  }
  if (req.body.street != null) {
    res.user.street = req.body.street;
  }
  if (req.body.city != null) {
    res.user.city = req.body.city;
  }
  if (req.body.state != null) {
    res.user.state = req.body.state;
  }
  if (req.body.user_type != null) {
    res.user.user_type = req.body.user_type;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted user' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
