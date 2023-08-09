// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const tokenHelper = require('../core/utils/token_helper')

async function getUser(req, res, next) {        // This should be located in userServce class or similar loc.
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' });
      }
      res.user = user;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = tokenHelper.decode(token)
    if (decoded==null) {
        return res.status(403).send({ error: 'Error: token is invalid or expired.' });
    }
    const user = await User.findOne({ _id: decoded.userId });
    if (!user) {
      return res.status(403).send({ error: 'Error: user not found.' })
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

const isAdmin = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = tokenHelper.decode(token)
      if (decoded==null) {
          return res.status(403).send({ error: 'Error: token is invalid or expired.' });
      }
      const user = await User.findOne({ _id: decoded.userId });
      if (!user) {
        return res.status(403).send({ error: 'Error: user not found.' })
      }
      if (user.user_type!=='admin') {
        return res.status(403).send({ error: 'Error: admin permission is required.' })
      }
  
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Please authenticate.' });
    }
  };

module.exports = {
    isAuthenticated,
    isAdmin,
    getUser
}
