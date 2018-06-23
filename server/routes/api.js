const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/facultyController');
const study_program_controller = require('../controllers/studyprogramController');
const schedule_controller = require('../controllers/scheduleController');
const course_controller = require('../controllers/courseController');
const semester_controller = require('../controllers/semesterController');
const message_list_controller = require('../controllers/messagelistController');
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
router.get('/program/list', study_program_controller.study_program_list_by_faculty); // Programs by faculty
router.patch(sem_regex+'/course/:id/set_conflicts',course_controller.set_conflicts);
//router.delete('/program/delete', study_program_controller.study_program_delete);

router.get(sem_regex + '/course/list', course_controller.faculty_course_list); //Courses by faculty
router.get(sem_regex + '/courses/list',course_controller.all_courses);//list of all courses

router.get(sem_regex + '/course/:courseID', course_controller.course_data);
router.put(sem_regex + '/course/:courseID/update',course_controller.faculty_course_update);

router.get(sem_regex + '/schedule', schedule_controller.faculty_schedule);//create schedule (load if exists)
router.patch(sem_regex + '/course/:courseID/schedule_a',schedule_controller.schedule_moed_a);//assign moed_a
router.patch(sem_regex + '/course/:courseID/schedule_b',schedule_controller.schedule_moed_b);//assign moed_b
router.patch(sem_regex + '/schedule/clear',schedule_controller.clear_exams);//clear schedule

router.get('/semester/list', semester_controller.semester_list);

router.get('/message/list', message_list_controller.messageList);
router.post(sem_regex + '/message/send', message_list_controller.sendMessage);
router.delete(sem_regex + '/message/remove', message_list_controller.removeMessage);

// User management routes

// Update user email
router.put('/update_email', faculty_controller.faculty_update_mail);
router.put('/update_password', faculty_controller.faculty_update_password);

router.post(sem_regex + '/course/create',course_controller.course_create);

// Following routes require admin user

router.all('*', auth.verify_admin);
router.delete(sem_regex + '/course/:courseID/delete', course_controller.faculty_course_delete);

router.post('/program/create', study_program_controller.study_program_create);
router.get('/faculty/details_list', faculty_controller.faculty_list_details); // Admin only, return also emails
router.post('/faculty/create', faculty_controller.faculty_create);
router.delete('/faculty/delete', faculty_controller.faculty_delete);
router.post('/faculty/update', faculty_controller.faculty_update);

router.post('/semester/create', semester_controller.semester_create);
router.delete('/semester/delete', semester_controller.semester_delete);
router.post('/semester/update', semester_controller.semester_update_dates);

module.exports = router;
