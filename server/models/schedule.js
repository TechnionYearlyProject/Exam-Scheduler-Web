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
  exams_a: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    },
    date: {
      type: Date,
      default: null
    }
  }],
  exams_b: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    }, date: {
      type: Date, default: null
    }
  }]
}
);

exports.model = mongoose.model('Schedule', ScheduleSchema);
