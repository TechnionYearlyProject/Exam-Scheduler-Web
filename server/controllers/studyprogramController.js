const StudyProgram = require('../models/studyprogram');


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
  StudyProgram.find({'faculty': req.params.id}, 'name')
    .exec(function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
};

exports.study_program_create = function (req, res, next) {
  const new_program = {
    name: req.body.name,
    faculty: req.params.id
  };
  StudyProgram.create(new_program, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.study_program_delete = function (req, res, next) {
  const program = {
    name: req.body.name,
    faculty: req.params.id
  };
  StudyProgram.remove(program, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};
