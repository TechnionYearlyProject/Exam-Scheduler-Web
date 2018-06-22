const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const Faculty = require('../models/faculty').model;
const logging = require('../../logging');

exports.login = function (req, res, next) {
  logging.db('Login: Fetch ' + req.body.name + ' user data.');
  const params = {
    name: req.body.name
  };
  Faculty.findOne(params, function (err, faculty) {
    if (err) {
      logging.error(err);
      return next(err);
    }
    if (!faculty) {
      logging.error('Authentication fail: Username unknown.');
      return res.status(404).send({
        auth: false,
        token: null,
        error_message: 'No user found.'
      });
    }
    const valid = bcrypt.compareSync(req.body.password, faculty.password);
    if (!valid) {
      logging.error('Authentication fail: Invalid password');
      return res.status(401).send({
        auth: false,
        token: null,
        error_message: 'Wrong password.'
      });
    }
    logging.info('Authentication successful.');
    const token_data = {
      id: faculty._id,
      name: faculty.name
    };
    const token = jwt.sign(token_data, config.secret, {expiresIn: 86400});
    return res.status(200).send({
      auth: true,
      token: token,
      username: faculty.name,
      image: faculty.image
    });
  });
};

exports.verify_token = function (req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    logging.error('Authorization failed: No token.');
    return res.status(401).send({
      auth: false,
      message: 'No token provided.'
    });
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      logging.error('Authorization failed: Invalid token.');
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });
    }
    req.faculty_id = decoded.id;
    req.faculty_name = decoded.name;
    return next();
  });
};

exports.verify_token_front = function (req, res, next) {
  if (!req.cookies.token) {
    logging.error('Authorization failed: No token.');
    return res.redirect('/login');
  }
  jwt.verify(req.cookies.token, config.secret, function (err) {
    if (err) {
      logging.error('Authorization failed: Invalid token.');
      return res.redirect('/login');
    }
    return next();
  });
};

exports.verify_admin = function (req, res, next) {
  Faculty.findOne({name: config.admin_default.name}, function (err, admin) {
    if (err) {
      logging.error(err);
      return next(err);
    }
    if (!admin) {
      logging.error("Admin user doesn't exists.");
      return res.status(500).send({
        auth: false,
        message: "Error: Admin user doesn't exist."
      });
    }
    if (req.faculty_id == admin._id) {
      return next();
    }
    logging.error('Authorization failed: Not an admin user.');
    return res.status(401).send({
      auth: false,
      message: 'Request require admin authorization.'
    });
  });
};

exports.verify_admin_front = function (req, res, next) {
  Faculty.findOne({name: config.admin_default.name}, function (err, admin) {
    if (err) {
      logging.error(err);
      return next(err);
    }
    if (!admin) {
      logging.error("Admin user doesn't exists.");
      return res.status(500).send({
        auth: false,
        message: "Error: Admin user doesn't exist."
      });
    }
    if (!req.cookies.faculty.localeCompare(config.admin_default.name)) {
      return next();
    }
    logging.error('Authorization failed: Not an admin user.');
    return res.redirect('/scheduler');
  });
};
