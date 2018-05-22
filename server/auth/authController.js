const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const Faculty = require('../models/faculty');

exports.login = function (req, res, next) {
  const params = {
    name: req.body.name
  };
  Faculty.findOne(params, function (err, faculty) {
    if (err) {
      return next(err);
    }
    if (!faculty) {
      return res.status(404).send('No user found.');
    }
    const valid = bcrypt.compareSync(req.body.password, faculty.password);
    if (!valid) {
      return res.status(401).send({
        auth: false,
        token: null
      });
    }
    const token = jwt.sign({id: faculty._id}, config.secret, {expiresIn: 86400});
    return res.status(200).send({
      auth: true,
      token: token
    });
  });
};

exports.verify_token = function (req, res, next) {
  if (config.enable === false) {
    return next(); // Verifying disabled, no authorization
  }
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({
      auth: false,
      message: 'No token provided.'
    });
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });
    }
    req.faculty_id = decoded.id;
    return next();
  });
};

exports.verify_token_front = function (req, res, next) {
  if (config.enable === false) {
    return next(); // Verifying disabled, no authorization
  }
  if (!req.cookies.token) {
    return res.redirect('/login');
  }
  jwt.verify(req.cookies.token, config.secret, function (err, decoded) {
    if (err) {
      return res.redirect('/login');
    }
    return next();
  });
};

exports.verify_admin = function (req, res, next) {
  if (config.enable === false) {
    return next(); // Verifying disabled, no authorization
  }
  Faculty.findOne({name: config.admin_name}, function (err, admin) {
    if (err) {
      return next(err);
    }
    if (!admin) {
      return res.status(500).send({
        auth: false,
        message: "Error: Admin user doesn't exist."
      });
    }
    if (req.faculty_id == admin._id) {
      return next();
    }
    return res.status(401).send({
      auth: false,
      message: 'Request require admin authorization.'
    });
  });
};
