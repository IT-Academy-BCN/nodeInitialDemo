import express from 'express';
import { averagePlayers, getLoser, getWinner } from '../../controllers/ranking.js';

const router = express.Router();

// RUTAS

router.get('/', averagePlayers);

router.get('/loser', getLoser);

router.get('/winner', getWinner);

export default router;