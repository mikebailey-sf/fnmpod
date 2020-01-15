const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

require('dotenv').config();
require('./config/database');

app.get('/secret', function (req, res) {
  return res.send('sauce');
 });

app.get('/api/home', function(req, res) {
  return res.send('Welcome!');
});
app.get('/api/secret', function(req, res) {
  return res.send('The password is potato');
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);