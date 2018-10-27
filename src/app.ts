import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';

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
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(require('express-edge'));
    // this.app.set('view engine', 'pug'); // for other view engines
    this.app.set('views', path.join(__dirname, '../views'));
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
