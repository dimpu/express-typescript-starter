import express from 'express';
import { static as Estatic, Application } from 'express';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import { join } from 'path';

import { routerConfig } from './router';

class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: Application;

  private config(): void {
    this.app.set('port', process.env.PORT || 3100);
    this.app.use(json());
    this.app.use(cookieParser());
    this.app.use(require('express-edge'));
    // this.app.set('view engine', 'pug'); // for other view engines
    this.app.set('views', join(__dirname, '../views'));
    this.app.use(urlencoded({ extended: false }));
    this.app.use(
      Estatic(join(__dirname, 'public'), { maxAge: 31557600000 })
    );
  }
  private routes(): void {
    routerConfig(this.app);
  }

}

export default new App().app;
