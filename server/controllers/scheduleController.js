const Schedule = require('../models/schedule').model;
const Semester = require('../models/semester').model;

exports.schedule_list = function(req,res,next){
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Schedule.find({semester: semester._id}, 'name faculty start end exams');
  })
  .then(schedule => {
    return res.json(schedule);
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_schedule = function(req,res,next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Schedule.find({
      semester: semester._id,
      faculty: req.faculty_id
    });
  })
  .then(schedule => {
    return res.json(schedule);
  })
  .catch(err => {
    next(err);
  });
};

exports.add_schedule = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Schedule.create({
      semester: semester._id,
      faculty: req.faculty_id,
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};