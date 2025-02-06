const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.js')
const moviesRoutes = require('./routes/movies.js')
require('dotenv').config()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);

app.listen(port, () => console.log('> Server is up and running on port : ' + port))