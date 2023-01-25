## Com arrancar:
1. Desde NodeInitialDemo fes `npm install` això instalarà automáticament express, dotenv, sequelize i mysql2
2. Desde NodeInitialDemo canvia `.env-template` per `.env` i insereix-ho dins la carpeta app
3. Modifica els apartats del `.env` per a que coincideixin amb el access del teu `MySQL`.
4. Inicia la aplicació amb `node app.js` desde dins la carpeta app

## construcció:
Has de tenir en compte els següents detalls de construcció:

[POST] /players: crea un jugador/a.
[PUT] /players/{id}: modifica el nom del jugador/a.
[GET] /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
[POST] /games/{id}: un jugador/a específic realitza una tirada.
[DELETE] /games/{id}: elimina les tirades del jugador/a.
[GET] /games/{id}: retorna el llistat de jugades per un jugador/a.
[GET] /ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.
[GET] /ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.
[GET] /ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.

About game:
You play with 2 dices, 6 faces
You win when sum of 2 dices = 7
Level 1: About SQL: - Sequalize as ORM - Must register as player: unique identifier, register date, name must be unique - Player can check: their throws (face number + total number), their winning rating and success % - If no name, name = “ANÒNIM”, there can be more than 1 “ANÒNIM” - You cannot delete a game but you can delete a players throw list - You can check all player's name list, player success % and average success %