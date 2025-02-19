const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.js')
const moviesRoutes = require('./routes/movies.js')
const profileRoutes = require('./routes/profile.js')
const useractions = require('./routes/useractions.js')
const profileandsettings = require('./routes/profilemoviesdata.js')
const news = require('./routes/news.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/useractions', useractions);
app.use('/api/profileandsettings', profileandsettings);
app.use('/api/news', news);

app.listen(port, () => console.log('> Server is up and running on port : ' + port))