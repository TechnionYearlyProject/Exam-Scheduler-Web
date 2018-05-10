const User = require('../models/user');

exports.user_create = function (req, res, next) {
  const new_user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  User.create(new_user, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.user_delete = function (req, res, next) {
  if (req.body.username === 'admin') {
    return next(new Error('Cant remove admin user from the system'));
  }
  const user = {
    username: req.body.username
  };
  User.remove(user, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.user_update = function (req, res, next) {
  const conditions = {
    username: req.body.username
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
