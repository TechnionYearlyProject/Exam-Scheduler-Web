const Faculty = require('../models/faculty').model;
const config = require('../auth/config');
const bcrypt = require('bcryptjs');
const logging = require('../../logging');
exports.faculty_list = function (req, res, next) {
  logging.db('Fetch faculty list.');
  Faculty.find({}, 'name image _id')
  .then(data => {
    return res.json(data);
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_list_details = function (req, res, next) {
  logging.db('Fetch faculty details list.');
  Faculty.find({}, 'name email')
  .then(data => {
    return res.json(data);
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_create = function (req, res, next) {
  logging.db('Create faculty ' + req.body.name + '.');
  const hash = bcrypt.hashSync(req.body.password, 12);
  Faculty.create({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    image: req.body.image
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_delete = async function (req, res, next) {
  logging.db('Remove faculty ' + req.body.name + '.');
  if (req.body.name === config.admin_default.name) {
      return next(new Error('Cant remove admin user from the system'));
  }
  const f = Faculty.findOne({name:req.body.name}).then(f=>{return f;}).catch(err=>{next(err);});

  Faculty.remove({name: req.body.name})
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.get_name = function (req, res, next) {
  Faculty.findOne({_id: req.faculty_id})
  .then((faculty) => {
    return res.json({name: faculty.name,_id:req.faculty_id});
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.get_email = function (req, res, next) {
  Faculty.findOne({_id: req.faculty_id})
  .then((faculty) => {
    return res.json({email: faculty.email});
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_update = function (req, res, next) {
  logging.db('Update faculty ' + req.body.original + '.');
  const conditions = {name: req.body.original};
  Faculty.findOneAndUpdate(conditions, req.body)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_update_mail = function (req, res, next) {
  logging.db('Update faculty ' + req.faculty_name + ' mail.');
  const conditions = {_id: req.faculty_id};
  const update = {email: req.body.email};
  Faculty.findOneAndUpdate(conditions, update)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};

exports.faculty_update_password = function (req, res, next) {
  logging.db('Update faculty ' + req.faculty_name + ' password.');
  const conditions = {_id: req.faculty_id};
  if (req.body.new_password != req.body.retype_new_password) {
    logging.error('Update error: passwords are not the same.');
    return res.status(400).send('Passwords are not the same.');
  }
  const hash = bcrypt.hashSync(req.body.new_password, 12);
  const update = {password: hash};
  Faculty.findOneAndUpdate(conditions, update)
  .then(() => {
    return res.end();
  })
  .catch(err => {
    logging.error(err);
    next(err);
  });
};
