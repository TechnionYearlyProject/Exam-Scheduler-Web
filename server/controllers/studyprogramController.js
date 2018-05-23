const StudyProgram = require('../models/studyprogram').model;
const Semester = require('../models/semester').model;


exports.study_program_list = function (req, res, next) {
  StudyProgram.find({}, 'name faculty')
    .populate('faculty', 'name')
    .exec(function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
};

exports.study_program_list_by_faculty = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return StudyProgram.find({
      semester: semester._id,
      faculty: req.faculty_id
    },
    'name');
  })
  .then(programs => {
    res.json(programs);
  })
  .catch(err => {
    next(err);
  });
};

exports.study_program_create = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return StudyProgram.create({
      name: req.body.name,
      faculty: req.faculty_id,
      semester: semester._id
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.study_program_delete = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return StudyProgram.remove({
      name: req.body.name,
      faculty: req.faculty_id,
      semester: semester._id
    });
  })
  .then(() => {
    res.end();
  })
  .catch(err => {
    next(err);
  });
};
