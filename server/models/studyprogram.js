const mongoose = require('mongoose');

const StudyProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  faculty: {
    type: Schema.ObjectId,
    ref: 'Faculty',
    required: true
  },
});

exports.model = mongoose.model('StudyProgram', StudyProgramSchema);
