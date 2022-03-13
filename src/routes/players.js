import { Router } from 'express';

import { createPlayer, playersGet, playerGetId, generalRanking, modifyPlayerName, playerRollDices, getBetterPlayer, getWorstPlayer, deleteGames } from '../controllers/players-mongo';
import mysql from '../controllers/players-mysql';
import { validateToken } from '../../middlewares/validate-jwt';

const router = Router();

// returns the list of all players in the system with their average success rate.
router.get('/', validateToken, playersGet);

// Returns the list of plays by a player.
router.get('/:id/games', validateToken, playerGetId);

// Returns the average success rate for all players.
router.get('/ranking', validateToken, generalRanking);

// Returns the player with the worst success rate.
router.get('/ranking/loser', validateToken, getWorstPlayer);

// Returns the player with the highest success rate.
router.get('/ranking/winner', validateToken, getBetterPlayer);

// Create a player.
router.post('/', validateToken, createPlayer);

// A specific player makes a roll.
router.post('/:id/games', validateToken, playerRollDices);

// Modify player name.
router.put('/:id', validateToken, modifyPlayerName);

// Removes player spins.
router.delete('/:id/games', validateToken, deleteGames);

export default router;