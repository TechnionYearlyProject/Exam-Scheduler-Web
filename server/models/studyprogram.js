var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudyProgramSchema = new Schema(
  {
    name: {type: String, required: true},
    faculty: {type: Schema.ObjectId, ref: 'Faculty', required: true},
  }
);

module.exports = mongoose.model('StudyProgram', StudyProgramSchema);
