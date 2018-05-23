const mongoose = require('mongoose');

const SemesterModel = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100
  },
  semester: {
    type: String,
    required: true
  },
  start_a: {
    type: Date,
    required: true
  },
  end_a: {
    type: Date,
    required: true
  },
  start_b: {
    type: Date,
    required: true
  },
  end_b: {
    type: Date,
    required: true
  },
});

exports.model = mongoose.model('Semester', SemesterModel);