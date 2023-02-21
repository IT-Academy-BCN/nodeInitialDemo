## Sprint 4 IT Academy

Sprint dedicat a la familiarització amb el framework Express JS per a Node JS


### Instal·lar el projecte

Un cop es clona, les úniques ordres que caldrà executar són `npm install`per instal·lar totes les dependencies del projecte i, per executar-lo, `npm start`.

### Descripció de les rutes per l'sprint 4.2

| METHOD | ROUTE | FUNCTIONALITY |
| ------- | ----- | ------------- |
| *POST* | ```/players/``` | _Registrar un nou jugador_|
| *POST* | ```/games/{player_id}``` | _Fer una jugada pel jugador indicat amb la id_|
| *PUT* | ```/players/{player_id}``` |  _Actualitzar username del jugador indicat amb la id_|
| *GET* | ```/players/``` | _Llistat de tots els jugadors_|
| *GET* | ```/games/{player_id}``` | _Llistat de les jugades d'un jugador_|
| *GET* | ```/ranking/``` | _Llistat amb la classificació dels jugadors_|
| *GET* | ```/ranking/loser/``` | _Obtenir el jugador amb pitjor puntuació_|
| *GET* | ```/ranking/winner/``` | _Obtenir el jugador amb millor puntuació_|
