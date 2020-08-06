const http = require('http');
const db = require('./db');
const app = require('./api/app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Establish MongoDB connection
db.connect()
  .then(() => {
    server.listen(port);
  })
  .catch(() => {
    console.log('Database connection error');
  });

// If the server is rolling successfully
server.on('listening', () => {
  console.log(`Server is up and running on port ${port}`);
});

// In case of errors
server.on('error', (error) => {
  if (error) {
    console.log(`Something went wrong on start-up of the server. ${error}`);
    throw error;
  }
});
