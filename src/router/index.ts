import { Application } from 'express';
import homeRoute from './routes/home';

export const routerConfig = (app: Application) => {
  app.use('/', homeRoute);
};

