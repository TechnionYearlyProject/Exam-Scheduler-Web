const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Faculty = require('../models/faculty').model;
const logging = require('../../logging');
const StudyProgram = require('../models/studyprogram').model;

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
    logging.db('Create course ' + req.body.id + '.');
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
    const fac = await Faculty.findOne({
        _id:req.body.faculty
    }).then(f=>{
        if(!f){
            return res.status(404).send('Faculty not found.');
        }
        return f;
    }).catch(err=>{
       next(err);
    });

    const faculty_programs = await StudyProgram.find({
        faculty: req.body.faculty
    }).then(programs => {
        return programs;
    }).catch(err => {
        next(err);
    });
    var i;
    var programs = [];
    for(i =0;i<req.body.programs.length;i++){
        var flag = false;
        for(let j in faculty_programs){
            if(faculty_programs[j].name === req.body.programs[i].study_program){
                flag = true;
                var p = {
                    "study_program":faculty_programs[j]._id,
                    "semester":req.body.programs[i].semester
                };
                programs.push(p);
            }
        }
        if(flag === false ){
            return res.status(400).send('Study program does not exist.');
        }
    }

    Course.findOne({
        id: req.body.id,
        semester: semester._id,
        faculty: fac._id
    })
        .then(exists => {
            if (exists) {
                return res.status(400).send('Course already exists.');
            }
            return Course.create({
                id: req.body.id,
                name: req.body.name,
                faculty: fac._id,
                semester: semester._id,
                credit_point: req.body.credit_point,
                registrations: programs,
                days_before: req.body.days_before
            });
        })
        .then(() => {
            return res.end();
        })
        .catch(err => {
            next(err);
        });
};

exports.set_conflicts = async function(req,res,err) {
    logging.db('set course conflicts ' + req.params.id + '.');
    const semester = await Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    }).then(semester => {
        if (!semester) {
            return res.status(404).send('Semester not found.');
        }
        return semester;
    })
        .catch(err => {
            next(err);
        });


    const course_conflicts = await Course.find({
        id: req.body.conflicts,
        semester: semester._id
    }).then(courses => {
        return courses;
    }).catch(err => {
        next(err);
    });
    console.log(course_conflicts);
    var conflicts = [];
    for (let i in course_conflicts) {
        var p = {
            "course": course_conflicts[i]._id
        };
        conflicts.push(p);
    }
    console.log(conflicts)

    await Course.update({semester: semester._id, id: req.params.id},
        {$set: {conflicts: conflicts}}
    ).then(() => {
        return res.end();
    }).catch(err => {
        next(err);
    });
};

exports.faculty_course_update = async function (req, res, next) {
    const semester = await Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    })
        .then(semester => {
            if (!semester) {
                return res.status(404).send('Semester not found.');
            }
            return semester;
        }).catch(err => {
            next(err);
        });
    const course = await Course.findOne({
        faculty: req.faculty_id,
        id: req.params.courseID,
        semester: semester._id
    })
        .then(c => {
            if (!c) {
                return res.status(404).send('Course not found.');
            }
            return c;
        }).catch(err => {
            next(err);
        });

    const conditions = {
        is_first: req.body.is_first,
        is_last: req.body.is_last,
        has_exam: req.body.has_exam,
        is_required: req.body.is_required,
        days_before:req.body.days_before
    };

    Course.findOneAndUpdate({ _id:course._id}, conditions).then(()=> {
        return res.end();
    }).catch(err=>{next(err);});

};

/*
 remove course.
 */
exports.faculty_course_delete = async function (req, res, next) {
    logging.db('Delete course ' + req.params.courseID + '.');

    Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    })
        .then(semester => {
            if (!semester) {
                logging.error('Delete error: Semester not found.');
                return res.status(404).send('Semester not found.');
            }
            return Course.remove({
                id: req.params.courseID,
                semester: semester._id,
                faculty: req.body.faculty
            });
        })
        .then(() => {
            return res.end();
        })
        .catch(err => {
            logging.error(err);
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