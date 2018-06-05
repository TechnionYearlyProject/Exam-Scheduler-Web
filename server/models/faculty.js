const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

exports.model = mongoose.model('Faculty', FacultySchema);
