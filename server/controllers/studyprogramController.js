const StudyProgram = require('../models/studyprogram').model;
const Faculty = require('../models/faculty').model;


// exports.study_program_list = function (req, res, next) {
//   StudyProgram.find({}, 'name faculty')
//     .exec(function (err, data) {
//       if (err) {
//         return next(err);
//       }
//       res.json(data);
//     });
// };

exports.study_program_list_by_faculty = function (req, res, next) {
    return StudyProgram.find({
        faculty: req.faculty_id
    }, 'name').then(programs => {
        res.json(programs);
    }).catch(err => {
        next(err);
    });
};


exports.study_program_create = async function (req, res, next) {
    var faculties = [];
    var i;
    for(i =0;i<req.body.faculty.length;i++){
        const faculty = await Faculty.findOne({name:(req.body.faculty)[i]}).then(faculty => {
          if(!faculty){
              return res.status(404).send('faculty not found');
          }
          return faculty;
        }).catch(err =>{next(err);});

        faculties.push(faculty._id);
    }

    if(faculties.length == 0){
        return res.status(400).send('Study program should belong to at least one faculty');
    }
    const study_program = {name:req.body.name, faculty: faculties};
    StudyProgram.findOne(study_program).then(s => {
      if(s){
          return res.status(400).send('Study program already exists');
      }
      return StudyProgram.create(study_program).then(() => {
          return res.end();
        }).catch(err => {
            next(err);
        });
    });

};

// exports.study_program_delete = function (req, res, next) {
//     return StudyProgram.remove({
//         name: req.body.name,
//         faculty: req.faculty._id
//     }).then(() => {
//         res.end();
//     }).catch(err => {
//         next(err);
//     });
// };
