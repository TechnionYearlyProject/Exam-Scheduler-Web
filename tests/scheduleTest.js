const Scheduler = require('../lib/algorithm/scheduler');
const fs = require("fs");
const xml2js = require('xml2js');
const Course = require('../server/models/course').model;
const Schedule = require('../server/models/schedule').model;
const Semester = require('../server/models/semester').model;

exports.tryToSchedule = function (req, res){
    var occupiedDays = Object.keys((JSON.parse(Object.keys(req.body)[0]))["occupied"]);
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
    var semester;
    var courses;
    Semester.findOne({year: 2018, semester: 'spring'}, "year semester start_a end_a start_b end_b").exec()
        .then(data => {
            semester = data;
            return Course.find({}, 'name id credit_point registrations has_exam').exec();
        })
        .then(data => {
            courses = data;
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
            const moedA = new Scheduler(semester.start_a, semester.end_a, occupied.moedA);
            const moedB = new Scheduler(semester.start_b, semester.end_b, occupied.moedB);
            moedA.schedule(courses);
            moedB.schedule(courses);
            res.send(JSON.stringify({
                'moed_a': moedA.getResult(),
                'moed_b': moedB.getResult()
            }));
            console.log("Done!");
        });
    console.log("Hi");
    return;
    var parser = new xml2js.Parser();
    fs.readFile(__dirname + '/../courses.xml', function (err, data) {
        parser.parseString(data, function (err, result) {
            console.log(__dirname);
            var courses = result.courses.course;
            for (var i = 0; i < courses.length; i++){
                courses[i].preparationTime = courses[i].credit_points[0] - 1;
                courses[i].number = courses[i].course_id[0];
                courses[i].name = courses[i].course_name[0];
                courses[i].specializations = [];
                if (courses[i].semester){
                    for (var j = 0; j < courses[i].semester.length; j++){
                        courses[i].specializations.push({
                            name: courses[i].semester[j]['$']['program'],
                            semesterNumber: courses[i].semester[j]['_']
                        });
                    }
                }
            }
//       for (var i = 0; i < courses.length; i++){
//           console.log(courses[i]);
//
            const testingInstance = new Scheduler(new Date(2018,6,4), new Date(2018,6,27));
            testingInstance.schedule(courses);
            //console.log(testingInstance.getResult());
            console.log('Done!');
            res.send(JSON.stringify(testingInstance.getResult()));
        });
    });
};

