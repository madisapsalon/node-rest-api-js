const mongoose = require('mongoose');
const log = require('../api/logger');

// Establish MongoDB connection
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || 'example';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '27017';
const databaseName = process.env.DB_NAME;
const mongoUri = `mongodb://${username}:${password}@${host}:${port}/`;
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

module.exports = {
  connect: async () => {
    log.info('Connecting to MongoDB...');

    mongoose.connection.on('connected', () => {
      log.info('Database connection is successfully established.');
    });

    mongoose.connection.on('error', error => {
      log.fatal(error);
    });

    return mongoose.connect(mongoUri, mongoOptions);
  }
}
