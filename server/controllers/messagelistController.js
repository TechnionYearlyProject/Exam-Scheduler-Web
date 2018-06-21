const MessageList = require('../models/messagelist').model;
const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Schedule = require('../models/schedule').model;

exports.messageList = function (req, res, next) {
  MessageList.find({
    receiver: req.faculty_id
  })
  .populate('sender', 'name')
  .populate('receiver', 'name')
  .populate('course', 'name id')
  .populate('semester', 'year semester')
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

  const course = await Course.findOne({
    id: req.body.course,
    semester: semester._id
  })
  .then(course => {
    if (!course) {
      return res.status(401).send('Course does not exists.');
    }
    return course
  })
  .catch(err => next(err));

  if (req.body.moed.localeCompare('A') && req.body.moed.localeCompare('B')) {
    return res.status(401).send('Invalid moed.');
  }

  const date = await Schedule.findOne({
    semester: semester._id,
    faculty: course.faculty,
    exams_a: {
      $elemMatch: {
        course: course._id
      }
    }
  })
  .then(schedule => {
    let to_parse;
    if (!req.body.moed.localeCompare('A')) {
      to_parse = schedule.exams_a;
    } else {
      to_parse = schedule.exams_b;
    }
    let date = null;
    to_parse.forEach(exam => {
      if (date === null && exam.course.equals(course._id)) {
        date = exam.date;
      }
    });
    return date;
  });

  if (date === null) {
    return res.status(401).send('Course has no schedule date.');
  }

  MessageList.create({
    sender: req.faculty_id,
    receiver: course.faculty,
    course: course._id,
    schedule: date,
    semester: semester._id,
    moed: req.body.moed,
    date: Date.now(),
    text: req.body.message
  })
  .then(() => {
    return res.end();
  })
  .catch(err => next(err));
};

exports.removeMessage = async function (req, res, next) {
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
    return MessageList.remove({
      faculty: req.faculty_id,
      course: course._id,
      moed: req.body.moed
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => next(err));
};