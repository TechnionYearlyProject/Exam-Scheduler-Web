const Schedule = require('../models/schedule');

// exports.schedule_list = function(req,res,next){
//   Schedule.find({},'name faculty start end exams')
//     .exec(function(data,err){
//     if(err){
//       return next(err);
//     }
//     return res.json(data);
//   });
// };
//
// exports.schedule_create = function(req,res,next){
//   const new_schedule = {
//     name:req.body.name,
//     faculty: req.body.faculty,
//     start:req.body.start,
//     end:req.body.end,
//     exams:req.body.exams
//   };
//   Schedule.create(new_schedule,function (err) {
//     if(err){
//       return next(err);
//     }
//     res.end();
//   });
// };
