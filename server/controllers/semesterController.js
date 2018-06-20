const Semester = require('../models/semester').model;
const logging = require('../../logging');

exports.semester_list = function (req, res, next) {
  logging.db('Fetch semester list.');
  Semester.find({}, 'year semester start_a end_a start_b end_b')
  .then(data => {
    return res.json(data)
  })
  .catch(err => {
    logging.error(err);
    next(err);
  })
};

exports.semester_create = function (req, res, next) {
  logging.db('Create semester ' + req.body.year + ' ' + req.body.semester + '.');
  Semester.findOne({
    year: req.body.year,
    semester: req.body.semester,
  })
  .then(semester => {
    if (semester) {
      return next(new Error('Semester already exists.'));
    }
    return Semester.create({
      year: req.body.year,
      semester: req.body.semester,
      start_a: req.body.start_a,
      end_a: req.body.end_a,
      start_b: req.body.start_b,
      end_b: req.body.end_b
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.semester_delete = function (req, res, next) {
  logging.db('Remove semester ' + req.body.year + ' ' + req.body.semester + '.');
  Semester.remove({
    year: req.body.year,
    semester: req.body.semester
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.semester_update_dates = function (req, res, next) {
  logging.db('Update semester ' + req.body.year + ' ' + req.body.semester + '.');
  const condition = {
    year: req.body.year,
    semester: req.body.semester
  };
  const update = {
    start_a: req.body.start_a,
    end_a: req.body.end_a,
    start_b: req.body.start_b,
    end_b: req.body.end_b
  };
  Semester.findOneAndUpdate(condition, update)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};