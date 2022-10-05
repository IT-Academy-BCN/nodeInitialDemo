# 🏐 Sprint 3.3 - Developer's Team 
Projecte en equip: Construir un projecte TO-DO que permeti portar un llistat de tasques per fer. 

Membres: **Ferran Bages**, **Cristina Carrillo** i **Marta Garijo**.
## 🤓 Descripció del Projecte

- Donat que el projecte s'ha d'executar per consola i l'usuari ha de poder escollir una sèrie d'opcions (crear tasca, llistar tasques, etc), hem fet servir la llibreria [inquirer](https://www.npmjs.com/package/inquirer). Aquesta permet gestionar l'input de l'usuari en forma de diàleg. 

- Hem utilitzat un arxiu JSON com a persistència. 
## 👇 Instruccions d'ús
### Instal.lació
Per iniciar el projecte, cal seguir els següents passos:

> Pas 1 - Clonar el projecte:

````
git clone https://github.com/reinevernunft13/nodeInitialDemo/tree/project
````

> Pas 2 - Descarregar les dependències necessàries via NPM:

````
npm install
````
### Arrancar el projecte

- Per arrancar el projecte, piqueu:

````
npm start
````

- Aquesta línia de comandament obrirà el menú d'inici, que demanarà un nom d'usuari.

- Un cop introduït un nom, es desplegarà un menú inicial a partir del qual es podran escollir diferents opcions (crear una nova tasca, llistar tasques, modificar una tasca, esborrar una tasca).

- **Important** ⚠️ Tot i que el menú donarà l'opció d'enregistrar en tres persistències diferents (json, mysql i mongodb), el projecte només s'executarà en la base de dades de tipus json. Així, es deixa la porta oberta a escalar el projecte més endavant.    




