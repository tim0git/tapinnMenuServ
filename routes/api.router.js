const apiRouter = require('express').Router();

apiRouter.use('/', (req, res) => {
  res.status(200).send({ message: 'hello' });
});

module.exports = apiRouter;
