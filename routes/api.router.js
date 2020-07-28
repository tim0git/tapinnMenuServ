const apiRouter = require('express').Router();
const { getMenu, postMenu } = require('../controller/db.controller');

apiRouter.route('/').get(getMenu).post(postMenu);

module.exports = apiRouter;
