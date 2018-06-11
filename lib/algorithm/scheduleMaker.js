const Scheduler = require('./scheduler');
const fs = require("fs");
const xml2js = require('xml2js');
const Course = require('../../server/models/course').model;
const Schedule = require('../../server/models/schedule').model;
const Semester = require('../../server/models/semester').model;

exports.tryToSchedule = function (req, res){
    var request = JSON.parse(Object.keys(req.body)[0]);
    var occupiedDays = Object.keys(request.occupied);
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
                courses[i].preparationTime = courses[i].credit_point[0] - 1;
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
            }
        })
        .then(data => {
            const moedA = new Scheduler(semester.start_a, semester.end_a, faculty, occupied.moedA);
            const moedB = new Scheduler(semester.start_b, semester.end_b, faculty, occupied.moedB);
            moedA.schedule(courses);
            moedB.schedule(courses);
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