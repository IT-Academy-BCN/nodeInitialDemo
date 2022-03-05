import { Router } from 'express';
import { playersGet, playersPost, playersPut, playersDelete } from '../controllers/players';

const router = Router();

// returns the list of all players in the system with their average success rate.
router.get('/', playersGet);

// Returns the list of plays by a player.
router.get('/:id/games', playersGet);

// Returns the average success rate for all players.
router.get('/ranking', playersGet);

// Returns the player with the worst success rate.
router.get('/ranking/loser', playersGet);

// Returns the player with the highest success rate.
router.get('/ranking/winner', playersGet);

// Create a player.
router.post('/', playersPost);

// A specific player makes a roll.
router.post('/:id/games', playersPost);

// Modify player name.
router.put('/', playersPut);

// Removes player spins.
router.delete('/:id/games', playersDelete);

module.exports = router;