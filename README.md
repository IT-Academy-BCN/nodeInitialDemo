# nodeInitialDemo
🧬 
# Branca api 4.2: Entrega 4.2: Node REST + DB + JWT

## Instruccions per a iniciar el projecte:

Instal·lar els mòduls amb:

```
npm install
```

Per a iniciar el server:

Mode producció:


```
npm start
```

Mode desenvolupament:

```
npm run dev
```
•	Al README.md hauries d'afegir el canvi de contrasenya de la base de dades i el nom de la base de dades que usaràs (perquè no hi hagi problemes de sobreescritura)

 user: "root",
  password: "root1111_",
  database: "dice_game",
  host: "localhost",
  dialect: "mysql",
  
Depenent de si vols fer servir la persistència en la base de dades MongoDB o MySQL s'haurà de canviar el "dialect". 
És a dir, si es vol guardar les dades a MongoDB:
```
dialect: "mongo"
```

I si es vol fer servir la base de dades de MySQL:

```
dialect: "mysql"
```


## Endpoints 

Els endpoints establerts eren els següents:

POST /players: crea un jugador;

PUT /players/{id}: modifica el nom del jugador;

GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge d’èxits;

POST /games/{id}: un jugador específic realitza una tirada;

DELETE /games/{id}: elimina les tirades del jugador;

GET /games/{id}: retorna el llistat de jugades per un jugador;

GET /ranking: retorna un ranking de jugadors ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors;

GET /ranking/loser: retorna el jugador amb pitjor percentatge d’èxit;

GET /ranking/winner: retorna el jugador amb millor percentatge d’èxit;
