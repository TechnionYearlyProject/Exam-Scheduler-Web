const Scheduler = require('../lib/algorithm/scheduler');
const fs = require("fs");
const xml2js = require('xml2js');

exports.tryToSchedule = function (req, res){
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
            console.log(testingInstance.getResult());
            console.log('Done!');
            res.send(JSON.stringify(testingInstance.getResult()));
        });
    });
};
//var parser = new xml2js.Parser();
//fs.readFile(__dirname + '/../courses.xml', function (err, data) {
//   parser.parseString(data, function (err, result) {
//       console.log(__dirname);
//       var courses = result.courses.course;
//       for (var i = 0; i < courses.length; i++){
//           courses[i].preparationTime = courses[i].credit_points[0] - 1;
//           courses[i].number = courses[i].course_id[0];
//           courses[i].name = courses[i].course_name[0];
//           courses[i].specializations = [];
//           if (courses[i].semester){
//               for (var j = 0; j < courses[i].semester.length; j++){
//                   courses[i].specializations.push({
//                       name: courses[i].semester[j]['$']['program'],
//                       semesterNumber: courses[i].semester[j]['_']
//                   });
//               }
//           }
//       }
////       for (var i = 0; i < courses.length; i++){
////           console.log(courses[i]);
////       }
//       const testingInstance = new Scheduler(new Date(2018, 7, 4), new Date(2018, 7, 27));
//       testingInstance.schedule(courses);
//       console.log(testingInstance.getResult());
//       console.log('Done!');
//   });
//});
//
//module.exports = tryToSchedule;
//
