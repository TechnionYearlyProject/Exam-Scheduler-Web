const mongoose = require('mongoose');
const Course = require('./course').model;
const Schedule = require('./schedule').model;
const MessageList = require('./messagelist').model;

const SemesterModel = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100
  },
  semester: {
    type: String,
    required: true
  },
  start_a: {
    type: Date,
    required: true
  },
  end_a: {
    type: Date,
    required: true
  },
  start_b: {
    type: Date,
    required: true
  },
  end_b: {
    type: Date,
    required: true
  },
});

SemesterModel.pre('remove', function (next) {
  Course.remove({
    semester: this._id
  }).exec();
  Schedule.remove({
    semester: this._id
  }).exec();
  MessageList.remove({
    semester: this._id
  }).exec();
  next();
});

exports.model = mongoose.model('Semester', SemesterModel);