const router = require('express').Router();

const routes = () => {
  router.get('/', (req, res) => {
    res.send('GET /entity response is successful');
  });

  return router;
}

module.exports = routes();
