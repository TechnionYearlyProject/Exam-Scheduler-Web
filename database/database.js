const mongoose = require('mongoose');
const Faculty = require('../server/models/faculty').model;
const config = require('../server/auth/config');
const db_config = require('./database_config');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const debug = require('debug')('exam-scheduler:server');

function init_admin() {
  Faculty.findOne({name: config.admin_default.name})
  .then(admin => {
    if (!admin) {
      debug('Admin user is missing.');
      debug('Creating default admin user...');
      Faculty.create(config.admin_default)
      .then(() => debug('Admin user created successfully.'))
      .catch(err => console.error(err));
    } else {
      debug('Admin user exists.');
    }
  })
  .catch(err => console.error(err));
}

exports.open = async function () {
  if (process.env.NODE_ENV === 'test') {
    await mockgoose.prepareStorage();
    await mongoose.connect("mongodb://localhost/exam-scheduler-test");
  } else {
    await mongoose.connect(db_config.uri, db_config.options);
    debug('Connection to MongoDB database successful.');
    init_admin();
  }
};

exports.close = async function () {
  await mockgoose.helper.reset();
  await mongoose.disconnect();
};

