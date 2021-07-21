# Sprint-4 REST_API
#### Roll dice game 
---

### Tech Stack
___
* Backend
 > Node.js
 >express.js
 * Database
> MySQL(ORM)
#### Roll dice
```
### Instruction
- inside of config/config.js you need to create your credentialfor your database connection
- At first you need to create Database Named (rest_api)
- Once you have created your database you can start the server from app.js
npm install -> [install all the dependency]
npm run dev -> [start the server]

```

## Endpoint
---
-POST: / players: create a player.

-PUT / players: changes the player's name


-POST / players / {id} / games /: A specific player rolls the dice.

-DELETE / players / {id} / games: removes player rolls

-GET / players /: returns the list of all players in the system with their average success rate

-GET / players / {id} / games: Returns the list of plays by a player.

-GET / players / ranking: returns the average ranking of all players in the system. That is, the average success rate.

-GET / players / ranking / loser: returns the player with the worst success rate

-GET / players / ranking / winner: returns the player with the worst success rate

Also there is postman collection for each end point inside of config/Sprint_4_rest_server.postman_collection
