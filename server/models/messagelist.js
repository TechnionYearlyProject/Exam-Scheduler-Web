const mongoose = require('mongoose');

const MessageListSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: "Faculty",
    required: true
  },
  receiver: {
    type: mongoose.Schema.ObjectId,
    ref: "Faculty",
    required: true
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  semester: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semester'
  },
  moed: {
    type: String,
    enum: ['A', 'B']
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
    default: false
  }
});

exports.model = mongoose.model('MessageList', MessageListSchema);