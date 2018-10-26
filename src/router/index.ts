import express from 'express';
import homeRoute from './routes/home';

export const routerConfig = (app: express.Application) => {
  app.use('/', homeRoute);
};

