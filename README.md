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
