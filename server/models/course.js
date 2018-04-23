var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
  {
    id: {type: Number, required: true, min: 100000, max: 999999},
    name: {type: String, required: true},
    faculty: {type: Schema.ObjectId, ref: 'Faculty'},
    credit_point: {type: Decimal128, required: true, default: 3, min: 1},

    registrations: [{
      study_program: {type: Schema.ObjectId, ref: 'StudyProgram'},
      semester: {type: Number, min: 1}
    }],

    conflicts: [{
      course: {type: Schema.ObjectId, ref: 'Course'},
    }],

    constraint: {type: Date, default: null},
    forbidden_days: [{
      course: {type: Schema.ObjectId, ref: 'Course'},
    }],

    // Algorithm flags
    days_before: {type: Number, default: 3, min: 1},
    is_first: {type: Boolean, default: false},
    is_last: {type: Boolean, default: false},
    is_required: {type: Boolean, default: true},
    has_exam: {type: Boolean, default: true},

    // Internal flags
    is_taught: {type: Boolean, default: true},
  }
);

module.exports = mongoose.model('Course', CourseSchema);
