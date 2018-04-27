const express = require('express');
const router = express.Router();
const faculty_controller = require('../controllers/facultyController');
const schedule_controller = require('../controllers/scheduleController');

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/faculty/list', faculty_controller.faculty_list);
router.post('/faculty/create', faculty_controller.faculty_create);
router.delete('/faculty/delete', faculty_controller.faculty_delete);

// router.get('/schedule/list', schedule_controller.schedule_list);
// router.post('/schedule/create', schedule_controller.schedule_create);

module.exports = router;
