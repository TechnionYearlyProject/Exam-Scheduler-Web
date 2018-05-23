const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 100000,
    max: 999999
  },
  name: {
    type: String,
    required: true
  },
  faculty: {
    type: mongoose.Schema.ObjectId,
    ref: 'Faculty',
    required: true
  },
  credit_point: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    default: 3,
    min: 1
  },
  semester: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semester',
    required: true
  },

  registrations: [{
    study_program: {
      type: mongoose.Schema.ObjectId,
      ref: 'StudyProgram'
    },
    semester: {
      type: Number,
      min: 1
    }
  }],

  conflicts: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    },
  }],

  constraint: {
    type: Date,
    default: null
  },
  forbidden_days: [{
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    },
  }],

  // Algorithm flags
  days_before: {
    type: Number,
    default: 3,
    min: 1
  },
  is_first: {
    type: Boolean,
    default: false
  },
  is_last: {
    type: Boolean,
    default: false
  },
  is_required: {
    type: Boolean,
    default: true
  },
  has_exam: {
    type: Boolean,
    default: true
  },
});

exports.model = mongoose.model('Course', CourseSchema);
