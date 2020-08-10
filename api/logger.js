const config = require('./config')[process.env.NODE_ENV || 'development'];
module.exports = config.log();
