import express from 'express';
import gamesRoutes from './api/games.js';
import rankingRoutes from './api/ranking.js';
import { showPlayers, addPlayer, changeNamePlayer } from '../controllers/players.js';

const router = express.Router();

router.get('/', showPlayers);

router.post('/', addPlayer);

router.put('/', changeNamePlayer);

// RUTAS GAMES

router.use('/:id/games', gamesRoutes);

// RUTAS RANKING

router.use('/ranking', rankingRoutes);

export default router;