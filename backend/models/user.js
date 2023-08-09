const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  street: String,
  city: String,
  state: String,
  user_type: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
