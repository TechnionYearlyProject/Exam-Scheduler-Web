const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/facultyController');
const study_program_controller = require('../controllers/studyprogramController');
const schedule_controller = require('../controllers/scheduleController');
const course_controller = require('../controllers/courseController');
const semester_controller = require('../controllers/semesterController');
const auth = require('../auth/authController');

//
const sem_regex = '/:year([1-2][0-9]{3})-:semester(winter|spring)';

// User management routes

router.post('/login', auth.login);
router.get('/faculty/list', faculty_controller.faculty_list); // Necessary to display faculty list at login

// Database API routes

router.all('*', auth.verify_token);

router.get('/faculty/name', faculty_controller.get_name);
router.get('/faculty/email', faculty_controller.get_email);
router.get(sem_regex + '/program/list', study_program_controller.study_program_list_by_faculty); // Programs by faculty
// router.get(sem_regex + '/program/list_all', study_program_controller.study_program_list); // All programs
router.post(sem_regex + '/program/create', study_program_controller.study_program_create);
router.delete(sem_regex + '/program/delete', study_program_controller.study_program_delete);

router.get(sem_regex + '/course/list', course_controller.faculty_course_list); //Courses by faculty
// router.get(sem_regex + '/course/list_all', course_controller.course_list); //all courses
router.post(sem_regex + '/course/create',course_controller.course_create);
router.get(sem_regex + '/course/:courseID', course_controller.course_data);
router.delete(sem_regex + '/course/:courseID/delete', course_controller.faculty_course_delete);
router.patch(sem_regex + '/course/:courseID/update',course_controller.faculty_course_update);

router.get(sem_regex + '/schedule', schedule_controller.faculty_schedule);
// router.get(sem_regex + '/schedule_all', schedule_controller.schedule_list);

router.get('/semester/list', semester_controller.semester_list);

// User management routes

// Update user email
router.put('/update_email', faculty_controller.faculty_update_mail);
router.put('/update_password', faculty_controller.faculty_update_password);

// Following routes require admin user

router.all('*', auth.verify_admin);

router.get('/faculty/details_list', faculty_controller.faculty_list_details); // Admin only, return also emails
router.post('/faculty/create', faculty_controller.faculty_create);
router.delete('/faculty/delete', faculty_controller.faculty_delete);
router.post('/faculty/update', faculty_controller.faculty_update);

router.post('/semester/create', semester_controller.semester_create);
router.post('/semester/update', semester_controller.semester_update_dates);

module.exports = router;
