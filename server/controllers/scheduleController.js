const Schedule = require('../models/schedule');

exports.schedule_list = function(req,res,next){
  Schedule.find({},'name faculty start end exams')
    .exec(function(err,data){
    if(err){
      return next(err);
    }
    res.json(data);
  });
};

exports.schedule_data = function(req,res,next){
  Schedule.find({'_id':req.params.id},'name faculty start end exams').exec(function(err,data){
    if(err){
      return next(err);
    }
    res.json(data);
  });
};

exports.faculty_schedules = function(req,res,next){
  Schedule.find({'faculty':req.params.id},'name faculty start end exams').exec(function(err,data){
    if(err){
      return next(err);
    }
    res.json(data);
  });
};

//
exports.schedule_create = function(req,res,next){
  const new_schedule = {
    name:req.body.name,
    faculty: req.body.faculty,
    start:req.body.start,
    end:req.body.end,
    exams:req.body.exams
  };
  Schedule.create(new_schedule,function (err) {
    if(err){
      return next(err);
    }
    res.end();
  });
};
