const Course = require('../models/course').model;
const Semester = require('../models/semester').model;
const Faculty = require('../models/faculty').model;
const logging = require('../../logging');
const StudyProgram = require('../models/studyprogram').model;
const Schedule = require('../models/schedule').model;


exports.get_list = async function(req,res,next){
    const semester = await Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    })
        .then(semester => {
            if (!semester) {
                return res.status(404).send('Semester not found.');
            }
            return semester;
        }).catch(err=>{next(err);});
    var course = await Course.find({
                    semester: semester._id,
                    faculty: req.faculty_id
                }, 'name id credit_point days_before conflicts registrations').then(c=>{
                    return c;
    }).catch(err => {
            next(err);
        });
    var arr = [];
   for(let i =0;i<course.length;i++){
       let json = {};
       json["id"] = course[i]["id"];
       json["name"] = course[i]["name"];
       json["days_before"] = course[i]["days_before"];
       json["credit_point"] = course[i]["credit_point"];
        var conflicts = [];
        var programs = [];
       for(let j=0;j<course[i].conflicts.length;j++) {
           var query = {};

           var id = course[i].conflicts[j].course;
           query["_id"] = id.toString();
           const cc = await Course.findOne(query).then(c => {
               return c;
           }).catch(err => {
               next(err);
           });
           conflicts.push(cc.id.toString());
       }
       for(let j=0;j<course[i].registrations.length;j++) {
           var query = {};

           var id = course[i].registrations[j].study_program;
           query["_id"] = id.toString();
           const cp = await StudyProgram.findOne(query).then(c => {
               return c;
           }).catch(err => {
               next(err);
           });
           var t = {"name":cp.name, "semester":course[i].registrations[j].semester};

           programs.push(t);
       }
       json["conflicts"] = conflicts;
       json["programs"] = programs;

       arr.push(json);
   }
    return res.json(arr);
};

exports.faculty_course_list = function(req,res,next){
    Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    }).then(semester => {
            if (!semester) {
                return res.status(404).send('Semester not found.');
            }
            return Course.find({
                    semester: semester._id,
                    faculty: req.faculty_id
                },
                'name id credit_point constraint_a constraint_b is_first faculty is_last days_before has_exam conflicts _id');
        })
        .then(courses => {
            return res.json(courses);
        })
        .catch(err => {
            next(err);
        });

};

exports.init = async function (req, res, next) {
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

    // if(req.body.id.length !== 6){
    //     return res.status(400).send('Course ID must be 6 digits.');
    // }

    const faculty_programs = await StudyProgram.find({
        faculty: req.faculty_id
    }).then(programs => {
        return programs;
    }).catch(err => {
        next(err);
    });
    var i;
    var programs = [];
    // console.log(faculty_programs);
    for(i =0;i<req.body.programs.length;i++){
       var flag = false;
        //console.log(req.body.programs[i]["name"]);
        for(let j in faculty_programs){
            if(faculty_programs[j].name === req.body.programs[i]["name"]){
               flag = true;
               //  console.log("im here");
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
    // console.log(programs);
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
    // if(req.body.id.length !== 6){
    //     return res.status(400).send('Course ID must be 6 digits.');
    // }
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
            return res.status(404).send('Study program does not exist.');
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
    var conflicts = [];
    for (let i in course_conflicts) {
        var p = {
            "course": course_conflicts[i]._id
        };

        conflicts.push(p);
    }
    Course.findOneAndUpdate({semester: semester._id, id: req.params.id}, {conflicts: conflicts}).then(() => {
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
        days_before:req.body.days_before
    };

    Course.findOneAndUpdate({ _id:course._id}, conditions).then(()=> {
        return res.end();
    }).catch(err=>{next(err);});

};

exports.get_conflicts_dates = async function(req,res,err){
    logging.db('get course conflicts exam dates.');
    const semester = await Semester.findOne({
        year: req.params.year,
        semester: req.params.semester
    }).then(semester => {
        if (!semester) {
            return res.status(404).send('Semester not found.');
        }
        return semester;
    }).catch(err => {
        logging.db(err +'.');
        next(err);
    });
    const courses = await Course.find({
        semester: semester._id,
        faculty: req.faculty_id
    },'faculty conflicts').then(courses => {
        return courses;
    }).catch(err => {
        next(err);
    });

    var conflicts = [];
    for(var i in courses) {
        for (var j in courses[i].conflicts) {
            if (courses[i].conflicts[j].course !== undefined) {
                const c = await Course.findOne({_id: courses[i].conflicts[j].course}).then(c => {
                    return c;
                }).catch(err => {
                    next(err);
                });
                var conflict_faculty = c.faculty;
                if (req.faculty_id !== conflict_faculty) {
                    const sched = await Schedule.findOne({
                        semester: semester._id,
                        faculty: conflict_faculty
                    }).then(sched => {
                        return sched
                    }).catch(err => {
                        next(err);
                    });
                    if (sched) {

                        for (var k in sched.exams_a) {
                            if (sched.exams_a[k].course == c._id.toString()) {
                                var p = {
                                    "id": c.id, "date_a": sched.exams_a[k].date
                                };
                                conflicts.push(p);
                            }
                        }
                        for (var k in sched.exams_b) {
                            if (sched.exams_b[k].course == c._id.toString()) {
                                var p = {
                                    "id": c.id, "date_b": sched.exams_a[k].date
                                };
                                conflicts.push(p);
                            }
                        }
                    }
                }
            }

        }
    }
    return res.json(conflicts);
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
        }, 'name id credit_point constraint_a constraint_b is_first is_last days_before has_exam faculty conflicts _id');
    }).then(courses => {
        return res.json(courses);
    }).catch(err => {
        next(err);
    });
};