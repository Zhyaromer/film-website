const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies/movies.js');

router.get('/movies', moviesController.getAllMovies);
router.get('/series', moviesController.getAllSeries);
router.get('/random', moviesController.getRandomMoveandSeries);
router.get('/newest', moviesController.getNewestMoviesAndSeries);

module.exports = router;