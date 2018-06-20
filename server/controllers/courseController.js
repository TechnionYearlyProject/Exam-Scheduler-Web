const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Faculty = require('../models/faculty').model;
// const StudyProgram = require('../models/studyprogram').model;

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
    'name id credit_point constraint_a constraint_b is_first faculty is_last days_before has_exam');
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

  if(req.body.id.length !== 6){
      return res.status(400).send('Course ID must be 6 digits.');
  }

  const faculty = await Faculty.findOne({
    name: req.body.faculty
  })
  .then(faculty => {
    return faculty;
  })
  .catch(err => {
    next(err);
  });

  // const faculty_programs = await StudyProgram.find({
  //       faculty: req.faculty_id
  //   }).then(programs => {
  //       return programs;
  //   }).catch(err => {
  //       next(err);
  //   });
  // var i;
  // var programs = [];
  //   for(i =0;i<req.body.programs.length;i++){
  //       var flag = false;
  //       for(let j in faculty_programs){
  //       if(faculty_programs[j].name == req.body.programs[i].study_program){
  //         flag = true;
  //         var p = {
  //             "study_program":faculty_programs[j]._id,
  //             "semester":req.body.programs[i].semester
  //         };
  //         programs.push(p);
  //       }
  //     }
  //     if(flag === false ){
  //       return res.status(400).send('Study program does not exist.');
  //     }
  //   }

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
      faculty: faculty._id,
      semester: semester._id,
      credit_point: req.body.credit_point,
      // registrations: programs
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
exports.faculty_course_delete = async function (req, res, next) {
  const faculty = await Faculty.findOne({
    name: req.body.faculty
  })
  .then(faculty => {
    return faculty;
  })
  .catch(err => {
    next(err);
  });

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
      faculty: faculty._id
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
    'id name credit_point faculty registrations conflicts constraint_a constraint_b ' +
    'days_before is_first  is_last is_required is_taught has_exam');
  })
  .then(course => {
    return res.json(course);
  })
  .catch(err => {
    next(err);
  });
};

/*
 * only admin can get the list of all courses.
 */
exports.all_courses = function(req,res,next){
    Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    }).then(semester => {
        if (!semester) {
            return res.status(404).send('Semester not found.');
        }
        return Course.find({
            semester: semester._id,
        }, 'name id credit_point constraint_a constraint_b is_first is_last days_before has_exam faculty');
    }).then(courses => {
        return res.json(courses);
    }).catch(err => {
        next(err);
    });
};