const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://examscheduler.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', {
  auth: {
    user: 'examscheduler',
    password: '7ls6FfIEPsREaxQZHfaIu5xTKlPubw0QgmFwvKS0WRhNsUQBQtCZGGpSu3Fz07mYKmsRWjsuo6AvbzMAhvMYqw=='
  }
})
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/src')));
app.use('/api', api);

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
