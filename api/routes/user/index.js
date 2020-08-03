const router = require('express').Router();

const userController = require('../../controllers/user');

const routes = () => {
  router.get('/', userController.controller);

  return router;
}

module.exports = routes();
