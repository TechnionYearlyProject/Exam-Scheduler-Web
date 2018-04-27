var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    faculty: {
      type: Schema.ObjectId,
      ref: 'Faculty',
      required: true
    },
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },

    exams: [{
      course: {
        type: Schema.ObjectId,
        ref: 'Course'
      },
      date: {
        type: Date,
        default: null
      },
    }],
  }
);

module.exports = mongoose.model('Schedule', ScheduleSchema);
