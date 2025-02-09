const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings/Settings.js');
const {authenticateUser} = require('../middleware/Authenticator.js')

router.get('/settings', authenticateUser, settingsController.getSettings);
router.post('/changename', authenticateUser, settingsController.changeName);

module.exports = router;