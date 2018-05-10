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
