const mongoose = require('mongoose');
const Faculty = require('../server/models/faculty').model;
const config = require('../server/auth/config');
const db_config = require('./database_config');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const debug = require('debug')('exam-scheduler:server');

async function init_admin() {
  let admin = await Faculty.findOne({name: config.admin_default.name});
  if (!admin) {
    debug('Admin user is missing.');
    debug('Creating default admin user...');
    await Faculty.create(config.admin_default);
    debug('Admin user created successfully.');
  } else {
    debug('Admin user exists.');
  }
}

exports.open = async function () {
  if (process.env.NODE_ENV === 'test') {
    await mockgoose.prepareStorage();
    await mongoose.connect("mongodb://localhost/exam-scheduler-test");
  } else {
    await mongoose.connect(db_config.uri, db_config.options);
    debug('Connection to MongoDB database successful.');
  }
  await init_admin();
};

exports.close = async function () {
  await mockgoose.helper.reset();
  await mongoose.disconnect();
  mockgoose.mongodHelper.mongoBin.childProcess.kill();
};

