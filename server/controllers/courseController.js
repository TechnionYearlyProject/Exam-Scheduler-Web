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

exports.course_create = function (req, res, next) {
  const new_course = {
    id:req.body.id,
    name:req.body.name,
    faculty:req.params.id,
    credit_point:req.body.credit_point
  };//other fields will be added.
  Course.create(new_course,function(err){
    if(err){
      return next(err);
    }
    res.end();
  });
};
