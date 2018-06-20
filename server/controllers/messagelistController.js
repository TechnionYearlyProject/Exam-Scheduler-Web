const MessageList = require('../models/messagelist').model;
const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Schedule = require('../models/schedule').model;

exports.messageList = function (req, res, next) {
  MessageList.find({
    faculty: req.faculty_id
  })
  .populate('faculty', 'name')
  .populate('course', 'name id')
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

  MessageList.findOne({
    faculty: course.faculty,
    course: course._id
  })
  .then (async message_list => {
    if (!message_list) {
      // create new message list
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

      return MessageList.create({
        faculty: course.faculty,
        course: course._id,
        schedule: date,
        moed: req.body.moed,
        messages: [{
          sender: req.faculty_id,
          date: Date.now(),
          text: req.body.message
        }]
      })
    } else {
      // append new message to message_list
      let update = {
        sender: req.faculty_id,
        date: Date.now(),
        text: req.body.message
      };
      return MessageList.update({
        faculty: course.faculty,
        course: course._id
      }, {
        $push: {
          messages: update
        }
      })
    }
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