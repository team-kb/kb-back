import express from 'express';

const routes = express.Router();

routes.get('/', (req, res, next) => {
  res.json({ message: 'connected to Team K&B' });
  next();
});

export default routes;
