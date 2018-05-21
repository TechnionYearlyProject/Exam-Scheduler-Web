var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FacultySchema = new Schema(
  {
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
    }
  }
);

module.exports = mongoose.model('Faculty', FacultySchema);
