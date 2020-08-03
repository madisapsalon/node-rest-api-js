const router = require('express').Router();

const entityController = require('../../controllers/entity');

const routes = () => {
  router.get('/', entityController.controller);

  return router;
}

module.exports = routes();
