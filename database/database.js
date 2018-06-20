const mongoose = require('mongoose');
const Faculty = require('../server/models/faculty').model;
const config = require('../server/auth/config');
const db_config = require('./database_config');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const logging = require('../logging');

async function init_admin() {
  let admin = await Faculty.findOne({name: config.admin_default.name});
  if (!admin) {
    logging.warning('Admin user is missing.');
    logging.info('Creating default admin user...');
    await Faculty.create(config.admin_default);
    logging.info('Admin user created successfully.');
  } else {
    logging.info('Admin user exists.');
  }
}

exports.open = async function () {
  if (process.env.NODE_ENV === 'test') {
    await mockgoose.prepareStorage();
    await mongoose.connect("mongodb://localhost/exam-scheduler-test");
  } else {
    await mongoose.connect(db_config.uri, db_config.options);
    logging.info('Connection to MongoDB database successful.');
  }
  await init_admin();
};

exports.close = async function () {
  await mockgoose.helper.reset();
  await mongoose.disconnect();
  mockgoose.mongodHelper.mongoBin.childProcess.kill();
};

