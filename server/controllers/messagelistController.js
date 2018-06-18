const MessageList = require('../models/messagelist').model;
const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Faculty = require('../models/faculty').model;

exports.messageList = function (req, res, next) {
  MessageList.find({
    faculty: req.faculty_id
  })
  .populate('faculty', 'name')
  .populate('course', 'name')
  .populate('messages.sender', 'name')
  .then(message_lists => {
    return res.json(message_lists);
  })
  .catch(err => {
    next(err);
  })
};

exports.sendMessage = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return semester;
  })
  .catch(err => next(err));

  Course.findOne({
    id: req.body.course,
    semester: semester._id
  })
  .then(course => {
    if (!course) {
      return res.status(401).send('Course does not exists.');
    }
    return MessageList.create({
      faculty: course.faculty,
      course: course._id,
      messages: [{
        sender: req.faculty_id,
        date: Date.now(),
        text: req.body.message
      }]
    })
  })
  .then(() => {
    return res.end();
  })
  .catch(err => next(err))
};