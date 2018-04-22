var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseCommonSchema = new Schema(
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
  }
);

module.exports = mongoose.model('CourseCommon', CourseCommonSchema);
