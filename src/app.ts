import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

import { routerConfig } from './router';

class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.set('port', process.env.PORT || 3100);
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(require('express-edge'));
    this.app.set('views', path.join(__dirname, '../views'));
    // this.app.set('view engine', 'edge');
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(
      express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
    );
  }
  private routes(): void {
    routerConfig(this.app);
  }

}

export default new App().app;
