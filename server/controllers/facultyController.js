const Faculty = require('../models/faculty');

exports.faculty_list = function (req, res, next) {
  Faculty.find({})
    .exec(function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
};

exports.faculty_create = function (req, res, next) {
  const new_faculty = {
    name: req.body.name
  };
  Faculty.create(new_faculty, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.faculty_delete = function (req, res, next) {
  const faculty = {
    name: req.body.name
  };
  Faculty.remove(faculty, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
}
