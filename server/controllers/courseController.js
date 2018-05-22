const Course = require('../models/course');

exports.faculty_course_list = function(req,res,next){
  Course.find({'faculty': req.params.id}, 'name id credit_point')
    .exec(function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
};

/*
 Get list of all courses.
 */
exports.course_list = function(req,res,next){
  Course.find({},'name id credit_point').exec(function (err, data) {
    if(err){
      return next(err);
    }
    res.json(data);
  });
};

exports.faculty_course_update = function(req,res,next){
  Course.findByIdAndUpdate({'_id' :req.params.courseID},req.body,{upsert:true},function(err,data){
    if(err){
      return next(err);
    }
    res.end();
  });

};

exports.course_create = function (req, res, next) {
  const new_course = {
      id: req.body.id,
      name: req.body.name,
      faculty: req.params.id,
      schedule: req.body.schedule,
      credit_point: req.body.credit_point,
      registrations: req.body.programs
  };//other fields will be added.
  Course.create(new_course,function(err){
    if(err){
      return next(err);
    }
    res.end();
  });
};

/*
 remove course.
 */
exports.faculty_course_delete = function (req, res, next) {
  Course.remove({_id:req.params.courseID}, function (err) {
    if (err) {
      return next(err);
    }
    res.end();
  });
};

exports.course_data = function (req, res, next) {
  Course.find({'_id':req.params.courseID},
    'id name credit_point faculty registrations conflicts constraint forbidden_days ' +
    'days_before is_first is_last is_required is_taught is_required has_exam').exec(function(err,data) {
      if(err){
        return next(err);
      }
      res.json(data);
  });
};
