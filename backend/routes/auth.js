const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const tokenHelper = require('../core/utils/token_helper')

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // In a real application, you'd need to compare passwords securely
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const tokenPayload = { 'userId': user._id }
    const token = tokenHelper.encode(tokenPayload)
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
