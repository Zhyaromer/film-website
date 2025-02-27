const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/auth.js');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/password-reset', authController.passwordReset);

module.exports = router;