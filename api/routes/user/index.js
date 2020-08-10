const router = require('express').Router();
const checkAuth = require('../../middleware/auth');

const userController = require('../../controllers/user');

const routes = () => {
  router.get('/', checkAuth, userController.userInfo)
  router.post('/signup', userController.addUser);
  router.post('/signin', userController.loginUser);

  return router;
}

module.exports = routes();
