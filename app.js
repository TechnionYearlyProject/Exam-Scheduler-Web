const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const api = require('./server/routes/api');
const app = express();
const db = require('./database/database');
const auth = require('./server/auth/authController');
const schedulerTest = require('./tests/scheduleTest');
var logger = require('morgan');

//Connection to database
db.open();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/src')));
app.use('/js/request', express.static(path.join(__dirname, '/src/js/request.js')));
app.use('/js/cookie', express.static(path.join(__dirname, '/src/js/cookie.js')));
app.use('/api', api);

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'src/login.html')));
app.get('/logout', (req, res) => res.sendFile(path.join(__dirname, 'src/logout.html')));

// DEBUG ONLY
app.get('/debug', (req, res) => res.sendFile(path.join(__dirname, 'src/debug.html')));

app.all('*', auth.verify_token_front);

app.get('/scheduler', (req, res) => res.sendFile(path.join(__dirname, 'src/scheduler.html')));
app.get('/edit_email', (req, res) => res.sendFile(path.join(__dirname, 'src/edit_email.html')));
app.get('/edit_password', (req, res) => res.sendFile(path.join(__dirname, 'src/edit_password.html')));
app.get('/make-schedule', (req, res) => schedulerTest.tryToSchedule(req, res));
app.get('/', (req, res) => res.redirect('/scheduler'));

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;