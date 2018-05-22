const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/facultyController');
const study_program_controller = require('../controllers/studyprogramController');
const schedule_controller = require('../controllers/scheduleController');
const course_controller = require('../controllers/courseController');
const auth = require('../auth/authController');

router.get('/', (req, res) => {
  res.send('api works');
});

// User management routes

router.post('/login', auth.login);
router.get('/faculty/list', faculty_controller.faculty_list); // Necessary to display faculty list at login

// Database API routes

router.all('*', auth.verify_token);

router.get('/program/list', study_program_controller.study_program_list); // All faculties combined
router.get('/faculty/:id/program/list', study_program_controller.study_program_list_by_faculty); // Specific fac
router.post('/faculty/:id/program/create', study_program_controller.study_program_create);
router.delete('/faculty/:id/program/delete', study_program_controller.study_program_delete);

router.get('/course/list', course_controller.course_list);//all courses
router.get('/faculty/:id/course/list',course_controller.faculty_course_list);//faculty courses
router.post('/faculty/:id/course/create',course_controller.course_create);
router.delete('/faculty/:id/course/:courseID/delete', course_controller.faculty_course_delete);
router.get('/course/:courseID', course_controller.course_data);
router.patch('/course/:courseID/update',course_controller.faculty_course_update);

router.post('/faculty/:id/schedule/create', schedule_controller.schedule_create);
router.get('/faculty/:id/schedule/list', schedule_controller.faculty_schedules);
router.get('/schedule/:scheduleID',schedule_controller.schedule_data);
router.get('/schedule/list', schedule_controller.schedule_list);

// User management routes

// Update user email
router.patch('/update_email', faculty_controller.faculty_update_mail);
router.patch('/update_password', faculty_controller.faculty_update_password);

// Following routes require admin user

router.all('*', auth.verify_admin);

router.post('/faculty/create', faculty_controller.faculty_create);
router.delete('/faculty/delete', faculty_controller.faculty_delete);

module.exports = router;
