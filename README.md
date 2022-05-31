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

post('/players'): crea un jugador;

post('/players/:id/games'): un jugador específic realitza una tirada ;

get('/players'): retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits;

get('/players/:id/games')retorna el llistat de jugades per un jugador;

get('/players/ranking'): retorna el percentatge mig d’èxits del conjunt de tots els jugadors;

get('/players/ranking/loser'): retorna el jugador amb pitjor percentatge d’èxit;

get('/players/ranking/winner'): retorna el jugador amb millor percentatge d’èxit;

