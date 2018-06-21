const mongoose = require('mongoose');
const Course = require('./course').model;

const StudyProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  faculty: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Faculty',
    required: true
  }]
});

StudyProgramSchema.pre('remove', function(next) {
  Course.update({},{
    $pull: {
      registrations: {
        study_program: this._id
      }
    }
  }).exec();
  next();
});

exports.model = mongoose.model('StudyProgram', StudyProgramSchema);
