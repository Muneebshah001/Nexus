const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['investor', 'entrepreneur'],
    default: 'entrepreneur'
  },
  bio: {
    type: String,
    default: ''
  },
  startup: {
    type: String,
    default: ''
  },
  investmentHistory: {
    type: String,
    default: ''
  },
  preferences: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);