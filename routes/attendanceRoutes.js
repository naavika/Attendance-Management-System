const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');


router.post('/mark', attendanceController.markAttendance);

router.get('/fetch', attendanceController.fetchAttendance);

router.put('/update/:id', attendanceController.updateAttendance);

router.delete('/delete/:id', attendanceController.deleteAttendance);

module.exports = router;