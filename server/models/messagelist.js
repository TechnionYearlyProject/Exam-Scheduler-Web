const mongoose = require('mongoose');

const MessageListSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true
  },
  messages: [{
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: 'Faculty',
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    text: {
      type: String,
      required: true,
    }
  }]
});