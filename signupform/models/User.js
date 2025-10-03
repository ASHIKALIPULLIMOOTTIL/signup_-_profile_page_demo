// models/User.js
const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true // ensures no duplicate emails
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export model
const User = mongoose.model("User", userSchema);
module.exports = User;
