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

exports.faculty_schedule = async function(req,res,next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .catch(err => {next(err)});
  if (!semester) {
    return res.status(404).send('Semester not found.');
  }
  let schedule = await Schedule.findOne({
    semester: semester._id,
    faculty: req.faculty_id
  })
  .catch(err => {next(err)});
  if (!schedule) {
    schedule = await Schedule.create({
      semester: semester._id,
      faculty: req.faculty_id,
    })
    .catch(err => {next(err)});
  }
  return res.json(schedule);
};