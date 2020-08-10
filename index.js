const http = require('http');
const db = require('./db');
const app = require('./api/app');
const log = require('./api/logger');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Establish MongoDB connection
db.connect()
  .then(() => {
    server.listen(port);
  })
  .catch(() => {
    log.info('Database connection error');
  });

// If the server is rolling successfully
server.on('listening', () => {
  log.info(`Server is up and running on port ${port}`);
});

// In case of errors
server.on('error', (error) => {
  if (error) {
    log.fatal(`Something went wrong on start-up of the server. ${error}`);
    throw error;
  }
});
