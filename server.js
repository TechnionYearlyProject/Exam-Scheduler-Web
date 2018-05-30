const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const api = require('./server/routes/api');
const app = express();
const auth = require('./server/auth/authController');
const schedulerTest = require('./tests/scheduleTest');
const db = require('./database/database');

//Connection to database
db.open();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/src')));
app.use('/js/request', express.static(path.join(__dirname, '/src/js/request.js')));
app.use('/js/cookie', express.static(path.join(__dirname, '/src/js/cookie.js')));
app.use('/api', api);

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/login.html'));
});

app.get('/logout', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/logout.html'));
});

// DEBUG ONLY
app.get('/debug', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/debug.html'));
});

app.all('*', auth.verify_token_front);

app.get('/scheduler', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/scheduler.html'));
});

app.get('/edit_email', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/edit_email.html'));
});

app.get('/edit_password', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/edit_password.html'));
});

app.get('/make-schedule', function (req, res){
  schedulerTest.tryToSchedule(req, res);
});

app.get('/', function (req, res) {
  res.redirect('/scheduler');
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
