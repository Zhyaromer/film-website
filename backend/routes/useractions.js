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


module.exports = router;