🧬 
# Branca Chat-5.1: Entrega 5.1: Chat 

## Instruccions per a iniciar el projecte:

Per a instal·lar les dependències hauràs d'executar a les carpetes client i backend

```
npm install
```


 •	Instruccions d'arrencada: npm start no funciona ni en el client ni en el servidor




Per a iniciar el server:

Mode producció:


```
npm start
```

El client té el server al port 5001 i el back al 5000.

# Instruccions de configuració

Per tal de poder accedir a la connexió de la base de dades s'especifica a continuacio les dades corresponents:

  user: "root",
  password: "root1111_",
  database: "dice_game",
  host: "localhost",
  dialect: "mysql",




 
•	
•	Que el client em digui que està funcionant correctament al arrencar (si no diu res no sé si està funcionant o si s'ha penjat)
Un cop aconsegueixo fer-ho funcionar:
•	Abans de crear sales puc escriure però els missatges no van enlloc
•	Quan creo la primera sala sembla que no funciona (quan es connecta un altre usuari no reben els missatges)
•	S'hauria d'esborrar el contignut del xat al canviar de sala, per saber què s'ha enviat en cada sala
•	S'haurien d'afegir notificacions per quan un usuari entra o surt de la sala on estem
•	Estaria bé veure els usuaris que hi ha a la sala on estem
