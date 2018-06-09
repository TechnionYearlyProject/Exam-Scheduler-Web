const Course = require('../models/course').model;
const Semester = require('../models/semester').model;

/*
 Get list of all courses.
 */
exports.course_list = function(req,res,next){
  Course.find({},'name id credit_point').exec(function (err, data) {
    if(err){
      return next(err);
    }
    res.json(data);
  });
};

exports.faculty_course_list = function(req,res,next){
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Course.find({
      semester: semester._id,
      faculty: req.faculty_id
    },
    'name id credit_point is_first is_last days_before has_exam');
  })
  .then(courses => {
    return res.json(courses);
  })
  .catch(err => {
    next(err);
  });
};

exports.course_create = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return semester;
  })
  .catch(err => {
    next(err);
  });
  Course.findOne({
    id: req.body.id,
    semester: semester._id,
    faculty: req.faculty_id
  })
  .then(exists => {
    if (exists) {
      return res.status(400).send('Course already exists.');
    }
    return Course.create({
      id: req.body.id,
      name: req.body.name,
      faculty: req.faculty_id,
      semester: semester._id,
      credit_point: req.body.credit_point,
      registrations: req.body.programs
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.faculty_course_update = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Course.findOneAndUpdate({
      id: req.params.courseID,
      semester: semester._id,
      faculty: req.faculty_id
    },
    req.body);
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

/*
 remove course.
 */
exports.faculty_course_delete = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Course.remove({
      id: req.params.courseID,
      semester: semester._id,
      faculty: req.faculty_id
    });
  })
  .then(() => {
    return res.end();
  })
  .catch(err => {
    next(err);
  });
};

exports.course_data = function (req, res, next) {
  Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .then(semester => {
    if (!semester) {
      return res.status(404).send('Semester not found.');
    }
    return Course.findOne({
      id: req.params.courseID,
      semester: semester._id,
      faculty: req.faculty_id
    },
    'id name credit_point faculty registrations conflicts constraint forbidden_days ' +
    'days_before is_first is_last is_required is_taught is_required has_exam');
  })
  .then(course => {
    return res.json(course);
  })
  .catch(err => {
    next(err);
  });
};
