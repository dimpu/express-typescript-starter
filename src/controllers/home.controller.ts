import { Request, Response, NextFunction } from 'express';

class Home {
  async index(req: Request, res: Response, next: NextFunction ) {
    res.render('home', {
      title: 'Home'
    });
  }
}

export default new Home();
