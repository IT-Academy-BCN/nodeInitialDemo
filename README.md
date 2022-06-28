🧬 
# Branca Chat-5.1: Entrega 5.1: Chat 

# 1

Per a instal·lar les dependències hauràs d'executar a les carpetes client i backend

```
npm install
```

# 2

Per a arrencar el back i el front també hauràs d'executar la següent ordre a les carpetes backend i client respectivament:

```
npm start
```


El client té el server al port 5001 i el back al 5000.

# 3 Instruccions de configuració

Per tal de poder accedir a la connexió de la base de dades s'especifica a continuacio les dades corresponents:

  user: "root",
  password: "root1111_",
  database: "dice_game",
  host: "localhost",
  dialect: "mysql",

  Això ho pots trobar a la carpeta de back, a dins de config, a l'arxiu config.js


# Errors

no em guarda a la DB les sales tot i que es crea la base de dades, això fa q no pugui escriure


•	Abans de crear sales puc escriure però els missatges no van enlloc
•	Quan creo la primera sala sembla que no funciona (quan es connecta un altre usuari no reben els missatges)
•	S'hauria d'esborrar el contignut del xat al canviar de sala, per saber què s'ha enviat en cada sala
•	S'haurien d'afegir notificacions per quan un usuari entra o surt de la sala on estem
•	Estaria bé veure els usuaris que hi ha a la sala on estem
