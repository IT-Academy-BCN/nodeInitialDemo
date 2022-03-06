import { Router } from 'express';

import { createNewPlayer, playersGet, playerGetId } from '../controllers/players-mongo';

export const routerPlayers = Router();

// returns the list of all players in the system with their average success rate.
routerPlayers.get('/', playersGet);

// Returns the list of plays by a player.
routerPlayers.get('/:id/games', playerGetId);

// Returns the average success rate for all players.
// routerPlayers.get('/ranking', playersGet);

// Returns the player with the worst success rate.
// routerPlayers.get('/ranking/loser', playersGet);

// Returns the player with the highest success rate.
// routerPlayers.get('/ranking/winner', playersGet);

// Create a player.
routerPlayers.post('/', createNewPlayer);

// A specific player makes a roll.
// routerPlayers.post('/:id/games', playersPost);

// Modify player name.
// routerPlayers.put('/', playersPut);

// Removes player spins.
// routerPlayers.delete('/:id/games', playersDelete);