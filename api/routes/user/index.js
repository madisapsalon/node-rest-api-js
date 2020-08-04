const router = require('express').Router();

const userController = require('../../controllers/user');

const routes = () => {
  router.get('/', userController.controller);

  router.post('/', userController.addUser);

  return router;
}

module.exports = routes();
