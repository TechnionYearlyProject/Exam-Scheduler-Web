const Schedule = require('../models/schedule').model;
const Semester = require('../models/semester').model;
const Course = require('../models/course').model;
// exports.schedule_list = function (req, res, next) {
//   Semester.findOne({
//     year: req.params.year,
//     semester: req.params.semester
//   })
//   .then(semester => {
//     if (!semester) {
//       return res.status(404).send('Semester not found.');
//     }
//     return Schedule.find({semester: semester._id}, 'name faculty start end exams');
//   })
//   .then(schedule => {
//     return res.json(schedule);
//   })
//   .catch(err => {
//     next(err);
//   });
// };

exports.faculty_schedule = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  })
  .catch(err => {
    next(err)
  });
  if (!semester) {
    return res.status(404).send('Semester not found.');
  }
  let schedule = await Schedule.findOne({
    semester: semester._id,
    faculty: req.faculty_id
  })
  .catch(err => {
    next(err)
  });
  if (!schedule) {
    schedule = await Schedule.create({
      semester: semester._id,
      faculty: req.faculty_id,
    })
    .catch(err => {
      next(err)
    });
  }
  return res.json(schedule);
};

exports.schedule_moed_a = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  }).catch(err => {
    next(err)
  });
    if(!semester){
        return res.status(404).send('Semester not found.');
    }

  let schedule = await Schedule.findOne({
    semester: semester._id, faculty: req.faculty_id
  }).catch(err => {
    next(err)
  });
  if (!schedule) {
    return res.status(404).send('Schedule not found.');
  }

  let course = await Course.findOne({
    id: req.params.courseID,
    semester: semester._id
  }).catch(err => {
    next(err)
  });
  if (!course) {
    return res.status(404).send('Course not found.');
  }
  if (req.body.date === undefined) {
    return res.status(401).send('Date missing.');
  }
  var dates = {course: course._id, date: req.body.date};
  await Schedule.update(
  {semester: semester._id, faculty: req.faculty_id},
  {$push: {exams_a: dates}}
  ).then(() => {
    return res.end();
  }).catch(err => {
    next(err);
  });
};

exports.schedule_moed_b = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  }).catch(err => {
    next(err)
  });
  if (!semester) {
    return res.status(404).send('Semester not found.');
  }
  let schedule = await Schedule.findOne({
    semester: semester._id, faculty: req.faculty_id
  }).catch(err => {
    next(err)
  });
  if (!schedule) {
    return res.status(404).send('Schedule not found.');
  }

  let course = await Course.findOne({
    id: req.params.courseID,
    semester: semester._id
  }).catch(err => {
    next(err)
  });
  if (!course) {
    return res.status(404).send('Course not found.');
  }
  if (req.body.date === undefined) {
    return res.status(401).send('Date missing.');
  }
  var dates = {course: course._id, date: req.body.date};
  await Schedule.update({semester: semester._id},
  {$push: {exams_b: dates}}, function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
  ).then(() => {
    return res.end();
  }).catch(err => {
    next(err);
  });
};

exports.clear_exams = async function (req, res, next) {
  const semester = await Semester.findOne({
    year: req.params.year,
    semester: req.params.semester
  }).catch(err => {
    next(err)
  });
  if (!semester) {
    return res.status(404).send('Semester not found.');
  }
  let schedule = await Schedule.findOne({
    semester: semester._id, faculty: req.faculty_id
  }).catch(err => {
    next(err)
  });
  if (!schedule) {
    return res.status(404).send('Schedule not found.');
  }

  await Schedule.update({semester: semester._id},
  {$set: {exams_a: [], exams_b: []}}, function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  }
  ).then(() => {
    return res.end();
  }).catch(err => {
    next(err);
  });
};