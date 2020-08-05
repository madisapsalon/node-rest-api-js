const router = require('express').Router();

const userController = require('../../controllers/user');

const routes = () => {
  router.get('/', userController.user);
  router.post('/signup', userController.addUser);
  router.post('/signin', userController.loginUser);

  return router;
}

module.exports = routes();
