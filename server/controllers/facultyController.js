const Faculty = require('../models/faculty').model;
const config = require('../auth/config');
const bcrypt = require('bcryptjs');

exports.faculty_list = function (req, res, next) {
  Faculty.find({}, 'name')
  .then(data => {
    return res.json(data);
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_create = function (req, res, next) {
  const hash = bcrypt.hashSync(req.body.password, 12);
  Faculty.create({
    name: req.body.name,
    email: req.body.email,
    password: hash
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_delete = function (req, res, next) {
  if (req.body.name === config.admin_name) {
      return next(new Error('Cant remove admin user from the system'));
  }
  Faculty.remove({name: req.body.name})
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.get_name = function (req, res, next) {
  Faculty.findOne({_id: req.faculty_id})
  .then((faculty) => {
    return res.json({email: faculty.name});
  })
  .catch(err => {
    next(err);
  });
};

exports.get_email = function (req, res, next) {
  Faculty.findOne({_id: req.faculty_id})
  .then((faculty) => {
    return res.json({email: faculty.email});
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_update_mail = function (req, res, next) {
  const conditions = {_id: req.faculty_id};
  const update = {email: req.body.email};
  Faculty.findOneAndUpdate(conditions, update)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_update_password = function (req, res, next) {
  const conditions = {_id: req.faculty_id};
  if (req.body.new_password != req.body.retype_new_password) {
    return req.status(400).send('Passwords are not the same.');
  }
  const hash = bcrypt.hashSync(req.body.new_password, 12);
  const update = {password: hash};
  Faculty.findOneAndUpdate(conditions, update)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};
