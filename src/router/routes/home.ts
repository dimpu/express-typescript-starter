import { Router } from 'express';
import Home from '../../controllers/home.controller';

const router = Router();

router.get('/', Home.index);

export default router;
