var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FacultySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true},
  }
);

module.exports = mongoose.model('Faculty', FacultySchema);
