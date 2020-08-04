const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();

const mongoUri = 'mongodb://root:example@localhost:27017/';
const mongoOptions = { useNewUrlParser: true,  useUnifiedTopology: true };
mongoose.connect(mongoUri, mongoOptions, (err) => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log(error);
});

mongoose.connection.on('error', err => {
  console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

module.exports = app;
