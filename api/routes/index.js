const router = require('express').Router();

const userRoute = require('./user');
const entityRoute = require('./entity');

const routes = () => {
  router.get('/', (req, res) => {
    res.send('This is the main GET response of API.');
  });

  router.use('/user', userRoute);
  router.use('/entity', entityRoute);
  return router;
}

module.exports = routes();
