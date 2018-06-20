const Scheduler = require('./scheduler');
const Course = require('../../server/models/course').model;
const Semester = require('../../server/models/semester').model;

exports.tryToSchedule = function (req, res){
    var request = req.body;
    console.log("Here");
    console.log(request);
    var occupiedDays = [];
    if (request.occupied){
        occupiedDays = Object.keys(JSON.parse(request.occupied));
    }
    console.log(occupiedDays);
    console.log(request);
    var local_course_changes = JSON.parse(request.changes);
    console.log(local_course_changes);
    var semester = request.semester.split("-");
    var faculty = request.faculty;
    var occupied ={moedA: [], moedB: []};
    for (var i = 0; i < occupiedDays.length; i++){
        var occupiedDay = occupiedDays[i];
        var index = (/\d+/.exec(occupiedDay))[0];
        if (/^moed_a/.test(occupiedDay)){
            occupied.moedA.push(index);
        } else if (/^moed_b/.test(occupiedDay)){
            occupied.moedB.push(index);
        } else {
            throw "Is not moed A or moed B";
        }
    }
    //Schedule.find({semester: semester._id}, 'name faculty start end exams').then(data=>{console.log(data)});
    var courses;
    Semester.findOne({year: semester[0], semester: semester[1]}, "year semester start_a end_a start_b end_b").exec()
        .then(data => {
            semester = data;
            return Course.find({}, 'name id credit_point registrations has_exam faculty').populate('faculty').exec();
        })
        .then(data => {
            courses = data;
            shuffle(courses);
            for (var i = 0; i < courses.length; i++){
                var course_change = local_course_changes[courses[i].id];
                var prepTime = courses[i].credit_point - 1;
                if (course_change && course_change["preparationTime"]){
                    prepTime = course_change["preparationTime"];
                }
                if (prepTime < 1){
                    prepTime = 1;
                }
                courses[i].preparationTime = prepTime;
                courses[i].number = courses[i].id;
                courses[i].specializations = [];
                if (courses[i].registrations){
                    for (var j = 0; j < courses[i].registrations.length; j++){
                        courses[i].specializations.push({
                            name: courses[i].registrations[j]['study_program'],
                            semesterNumber: courses[i].registrations[j]['semester'],
                        });
                    }
                }
                if (course_change){
                    var pref = course_change["pref"];
                    if(pref == "התחלה"){
                       courses[i].is_first = true;
                       courses[i].is_last = false;
                    } else if (pref == "סןף") {
                        courses[i].is_first = false;
                        courses[i].is_last = true;
                    } else if (pref){
                        courses[i].is_first = false;
                        courses[i].is_last = false;
                    }
                    if(course_change["a_constraint"]){
                        courses[i]["a_constraint"] = course_change["a_constraint"];
                    }
                    if(course_change["b_constraint"]){
                        courses[i]["b_constraint"] = course_change["b_constraint"];
                    }
                    if(course_change.hasOwnProperty("has_exam")){
                       courses[i].has_exam = course_change["has_exam"];
                    }
                }
            }
        })
        .then(data => {
            const moedA = new Scheduler(semester.start_a, semester.end_a, faculty, occupied.moedA);
            const moedB = new Scheduler(semester.start_b, semester.end_b, faculty, occupied.moedB);
            moedA.schedule(courses, "a");
            moedB.schedule(courses, "b");
            res.send(JSON.stringify({
                'moed_a': moedA.getResult(),
                'moed_b': moedB.getResult()
            }));
            console.log("Done!");
        });
    return;
};


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}