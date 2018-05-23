const Schedule = require('../models/schedule').model;
const Semester = require('../models/semester').model;

exports.schedule_list = function(req,res,next){
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return next(new Error('Semester not found'));
    }
    return Schedule.find ({semester: semester._id}, 'name faculty start end exams');
  })
  .then(schedule => {
    return res.json(schedule);
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_schedule = function(req,res,next){
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return next(new Error('Semester not found'));
    }
    return Schedule.find ({
      semester: semester._id,
      faculty: req.faculty_id
    },
    'name faculty start end exams');
  })
  .then(schedule => {
    return res.json(schedule);
  })
  .catch(err => {
    next(err);
  });
};
