import { Router } from 'express';
import { playersGet } from '../controllers/players';

const router = Router();

router.get('/', playersGet);

module.exports = router;