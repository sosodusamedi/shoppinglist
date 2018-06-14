const express = require('express');
const apiRouter = require('./api');
const config = require('./config');
const path = require('path');
// const mongoose = require('mongoose');
// const parseurl = require('parseurl');
// const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');


// Init App
const server = express();

// Connect to Database + Change URI
// const url = config.MONGOLAB_URI;
//
// mongoose.connect(url, (err, db) => {
//   if (err) {
//     console.info('Unable to connect to the mongoDB server.', err);
//   } else {
//     console.info('Connected to mongoDB, db:', db);
//   }
// });


// Set the View Engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Home Route (with ejs)
server.get('/', (req, res) => {
  res.render('index');
});


// Put all API endpoints under '/api':
// API Middleware
server.use('/api', apiRouter);

// Express Middleware for serving React static files
server.use(express.static('public'));

// Start Server
server.listen(config.port, () =>
  console.info(`Express listening on port ${config.port}...`));
