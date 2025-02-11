const express = require('express');
const router = express.Router();
const useractions = require('../controllers/auth/useractions.js');
const { authenticateUser } = require('../middleware/Authenticator.js')

router.post('/savemovie', authenticateUser, useractions.saveMovie);
router.post('/favmovie', authenticateUser, useractions.favMovie);
router.post('/watchedmovie', authenticateUser, useractions.watchedMovie);
router.get('/savedmovies', authenticateUser, useractions.getSavedMovies);
router.get('/favmovies', authenticateUser, useractions.getfavMovies);
router.get('/watchedmovies', authenticateUser, useractions.getwatchedMovies);
router.post('/addcomment', authenticateUser, useractions.addComment);
router.get('/savedseries', authenticateUser, useractions.getSavedSeries);
router.get('/favseries', authenticateUser, useractions.getfavSeries);
router.get('/watchedseries', authenticateUser, useractions.getwatchedSeries);
router.post('/saveSeries', authenticateUser, useractions.saveSeries);
router.post('/favSeries', authenticateUser, useractions.favSeries);
router.post('/watchedSeries', authenticateUser, useractions.watchedSeries);
router.post('/addcommentseries', authenticateUser, useractions.addCommentSeries);


module.exports = router;