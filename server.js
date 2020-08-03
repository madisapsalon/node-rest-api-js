const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Let's roll the server
server.listen(port);

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
