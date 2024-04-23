const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/details/:rollNumber', studentController.getStudentDetails);

module.exports = router;
