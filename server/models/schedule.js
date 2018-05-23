const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  faculty: {
    type: mongoose.Schema.ObjectId,
    ref: 'Faculty',
    required: true
  },
  semester: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semester',
    required: true
  },
  exams: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    },
    date_a: {
      type: Date,
      default: null
    },
    date_b: {
      type: Date,
      default: null
    },
  }],
});

exports.model = mongoose.model('Schedule', ScheduleSchema);
