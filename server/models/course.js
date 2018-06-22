const mongoose = require('mongoose');
const Schedule = require('./schedule').model;
const MessageList = require('./messagelist').model;

const CourseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
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
    min: 0
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
  is_required: {
    type: Boolean,
    default: true
  },
  has_exam: {
    type: Boolean,
    default: true
  },
  constraint_a: {
    type: Date,
    default: null
  },

  constraint_b: {
    type: Date,
    default: null
  },
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
  }
});

CourseSchema.pre('remove', function (next) {
  this.model('Course').update({
    semester: this.semester
  }, {
    $pull: {
      conflicts: this._id
    }
  }).exec();
  Schedule.update({
    faculty: this.faculty,
    semester: this.semester
  }, {
    $pull: {
      $or: [{
        exams_a: {
          course: this._id
        }
      }, {
        exams_b: {
          course: this._id
        }
      }]
    }
  }).exec();
  MessageList.remove({
    course: this._id
  }).exec();
  next();
});

exports.model = mongoose.model('Course', CourseSchema);
