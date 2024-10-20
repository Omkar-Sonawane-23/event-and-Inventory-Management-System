const express = require('express');
const router = express.Router();
const { 
    registerStudent,
    loginStudent,
    administratorsLogin 
} = require('../controller/authController');

router.post('/student/register', registerStudent);
router.post('/student/login', loginStudent);
router.post('/administrators/login', administratorsLogin);

module.exports = router;
