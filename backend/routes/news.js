const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/News/News.js');

router.get('/newestnews', moviesController.getAllNews);
router.get('/news/:newsId', moviesController.getSpecificNews);
router.get('/incrementView/:newsId', moviesController.incrementViewNews);
router.get('/newestnewshome', moviesController.getNewestNews);

module.exports = router;