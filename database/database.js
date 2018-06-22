const mongoose = require('mongoose');
const Faculty = require('../server/models/faculty').model;
const Course = require('../server/models/course').model;
const Semester = require('../server/models/semester').model;
const Schedule = require('../server/models/schedule').model;
const MessageList = require('../server/models/messagelist').model;
const StudyProgram = require('../server/models/studyprogram').model;
const config = require('../server/auth/config');
const db_config = require('./database_config');
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
    await mongoose.connect(db_config.test.uri, db_config.test.options);
    logging.info('Connection to MongoDB test database successful.');
  } else {
    await mongoose.connect(db_config.prod.uri, db_config.prod.options);
    logging.info('Connection to MongoDB database successful.');
  }
  await init_admin();
};

exports.close = async function () {
  if (process.env.NODE_ENV === 'test') {
    Faculty.remove({name: {$ne: config.admin_default.name}}).exec();
    Semester.remove({}).exec();
    StudyProgram.remove({}).exec();
    Course.remove({}).exec();
    Schedule.remove({}).exec();
    MessageList.remove({}).exec();
  }
  await mongoose.disconnect();
  logging.warning('Connection to MongoDB database closed.');
};

