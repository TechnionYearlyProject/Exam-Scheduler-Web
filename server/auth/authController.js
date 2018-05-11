var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config');
var User = require('../models/user');

exports.login = function (req, res, next) {
  var params = {
    username: req.body.username
  };
  User.findOne(params, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(404).send('No user found.');
    }
    var valid = bcrypt.compareSync(req.body.password, user.password);
    if (!valid) {
      return res.status(401).send({
        auth: false,
        token: null
      });
    }
    var token = jwt.sign({id: user._id}, config.secret, {expiresIn: 86400});
    res.status(200).send({
      auth: true,
      token: token
    });
  });
};

exports.verify_token = function (req, res, next) {
  if (config.enable === false) {
    next(); // Verifying disabled, no authorization
  }
  var token = req.headers['x-access-token'];
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
    req.user_id = decoded.id;
    next();
  });
};
