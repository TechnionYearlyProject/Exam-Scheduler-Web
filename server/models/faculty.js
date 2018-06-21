const mongoose = require('mongoose');
const Course = require('./course').model;
const Schedule = require('./schedule').model;
const StudyProgram = require('./studyprogram').model;
const MessageList = require('./messagelist').model;

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

FacultySchema.pre('remove', function (next) {
  Course.remove({
    faculty: this._id
  }).exec();
  Schedule.remove({
    faculty: this._id
  }).exec();
  MessageList.remove({
    faculty: this._id
  }).exec();
  MessageList.update({}, {
    $pull: {
      messages: {
        sender: this._id
      }
    }
  }).exec();
  StudyProgram.update({}, {
    $pull: {
      faculty: this._id
    }
  }).exec();
  next();
});

exports.model = mongoose.model('Faculty', FacultySchema);
