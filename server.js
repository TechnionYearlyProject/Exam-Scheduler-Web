const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const api = require('./server/routes/api');
const app = express();
const mongoose = require('mongoose');
const Faculty = require('./server/models/faculty').model;
const auth = require('./server/auth/authController');
const config = require('./server/auth/config');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://examscheduler.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', {
  auth: {
    user: 'examscheduler',
    password: '7ls6FfIEPsREaxQZHfaIu5xTKlPubw0QgmFwvKS0WRhNsUQBQtCZGGpSu3Fz07mYKmsRWjsuo6AvbzMAhvMYqw=='
  }
})
  .then(function () {
    console.log('connection successful');
    Faculty.findOne({name: config.admin_name}, function (err, admin) {
      if (err) {
        return next(err);
      }
      if (!admin) {
        console.log('Admin user is missing.\nCreating default admin user...');
        const hash = bcrypt.hashSync(config.admin_default_password, 12);
        const admin_user = {
          name: config.admin_name,
          email: config.admin_default_mail,
          password: hash
        };
        Faculty.create(admin_user, function (err) {
          if (err) {
            return next(err);
          }
          console.log('Admin user created successfully.');
        });
      } else {
        console.log('Admin user exists.');
      }
    })
  })
  .catch((err) => console.error(err));

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

// DEBUG ONLY
app.get('/debug', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/debug.html'));
});

app.all('*', auth.verify_token_front);

app.get('/scheduler', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/scheduler.html'));
});

app.get('/', function (req, res) {
  res.redirect('/scheduler');
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
