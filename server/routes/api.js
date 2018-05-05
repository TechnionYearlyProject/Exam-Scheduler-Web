const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/facultyController');
const study_program_controller = require('../controllers/studyprogramController');
const schedule_controller = require('../controllers/scheduleController');
const course_controller = require('../controllers/courseController');

router.get('/', (req, res) => {
  res.send('api works');
});


router.get('/faculty/list', faculty_controller.faculty_list);
router.post('/faculty/create', faculty_controller.faculty_create);
router.delete('/faculty/delete', faculty_controller.faculty_delete);

router.get('/program/list', study_program_controller.study_program_list); // All faculties combined
router.get('/faculty/:id/program/list', study_program_controller.study_program_list_by_faculty); // Specific fac
router.post('/faculty/:id/program/create', study_program_controller.study_program_create);
router.delete('/faculty/:id/program/delete', study_program_controller.study_program_delete);


router.get('/course/list', course_controller.course_list);//all courses
router.get('/faculty/:id/course/list',course_controller.faculty_course_list);//faculty courses

//router.put('/faculty/:id/course/:courseID/update',course_controller.faculty_course_update);

router.post('/faculty/:id/course/create',course_controller.course_create);



//router.get('/schedule/list', schedule_controller.schedule_list);
// router.post('/schedule/create', schedule_controller.schedule_create);

module.exports = router;
