const express = require('express');
const router = express.Router();
const profileandsettings = require('../controllers/profilemovies/profileandsettings.js');
const {authenticateUser} = require('../middleware/Authenticator.js')

router.get('/savedmoviesprofile', authenticateUser, profileandsettings.getSavedMovies);
router.get('/favmoviesprofile', authenticateUser, profileandsettings.getfavMovies);
router.get('/watchedmoviesprofile', authenticateUser, profileandsettings.getWatchedMovies);
router.get('/commentedmoviesprofile', authenticateUser, profileandsettings.getCommentedMovies);

router.get('/savedseriesprofile', authenticateUser, profileandsettings.getSavedSeries);
router.get('/favseriesprofile', authenticateUser, profileandsettings.getfavSeries);
router.get('/watchedseriesprofile', authenticateUser, profileandsettings.getWatchedSeries);
router.get('/commentedseriesprofile', authenticateUser, profileandsettings.getCommentedSeries);

module.exports = router;