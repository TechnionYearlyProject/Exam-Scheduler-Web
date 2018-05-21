const Faculty = require('../models/faculty');
const config = require('../auth/config');
const bcrypt = require('bcryptjs');

exports.faculty_list = function (req, res, next) {
  Faculty.find({}, 'name')
    .exec(function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
};

exports.faculty_create = function (req, res, next) {
  const hash = bcrypt.hashSync(req.body.password, 12);
  const new_faculty = {
    name: req.body.name,
    email: req.body.email,
    password: hash
  };
  Faculty.create(new_faculty, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.faculty_delete = function (req, res, next) {
  if (req.body.name === config.admin_name) {
      return next(new Error('Cant remove admin user from the system'));
  }
  const faculty = {
    name: req.body.name
  };
  Faculty.remove(faculty, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.faculty_update_mail = function (req, res, next) {
  const conditions = {
    username: req.user_id
  };
  const update = {
    email: req.body.email
  };
  User.findOneAndUpdate(conditions, update, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.faculty_update_password = function (req, res, next) {
  const conditions = {
    username: req.user_id
  };
  if (req.body.new_password != req.body.retype_new_password) {
    return req.status(400).send({
      message: 'Passwords are not the same.'
    });
  }
  const hash = bcrypt.hashSync(req.body.new_password, 12);
  const update = {
    password: hash
  };
  User.findOneAndUpdate(conditions, update, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};
