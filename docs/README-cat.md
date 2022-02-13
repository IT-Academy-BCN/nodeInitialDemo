# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Projecte realitzat com a treball de l'Sprint 3.3 del curs node.js a IT Academy Barcelona per [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) i [Daniel](https://github.com/DanielEspanadero)._

## Començant 🚀

_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local per a fins de desenvolupament i prova._

### Traduccions 💬

_Aquest fitxer README també està disponible en altres idiomes:_
- [Alemany](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-de.md)
- [Anglès](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)
- [Castellà](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)
- [Francès](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-fr.md)
- [Italià](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-it.md)
- [Portuguès](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-pt.md)
- [Suec](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-se.md)

### Requisits previs 📋

_Perquè el projecte funcioni correctament, es recomana tenir una sèrie de programes instal·lats i configurats adequadament:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQL Server](https://dev.mysql.com/downloads/)

### Instal·lació 🔧

_Recorda executar la següent ordre a la terminal per instal·lar les dependències i que tot funcioni correctament:_
````
npm install
````

### Variables d'entorn .env 🪛

Perquè la base de dades de MySQL funcioni correctament es requereix un usuari i una contrasenya que són propis de cada màquina. Per això cal crear un fitxer anomenat .env i configurar les variables d'entorn MYSQL_USER i MYSQL_PASSWORD definint l'usuari i la contrasenya respectivament.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-mysql-env.png)

## Comandes per executar ⌨️

⚠️ ABANS DE COMENÇAR, RECORDA TENIR INICIAT EL SERVIDOR DE MONGODB I MYSQL ⚠️

_Una vegada que tots els programes i dependències necessàries estiguin instal·lats, simplement executeu la següent ordre:_
````
npm start
````

## Execució del projecte ⚙️

_Si has realitzat correctament els passos anteriors, veuràs un menú interactiu, per moure't per ell pots utilitzar les tecles de fletxa amunt ▲ i fletxa avall ▼ o si ho prefereixes pots utilitzar els números del teclat._

### Menú base de dades 📀

_El primer menú que veuràs és el que et permetrà seleccionar la base de dades que vols utilitzar, pots triar JSON, MONGODB o MYSQL, recorda que per utilitzar MONGODB o MYSQL has de tenir activat el servidor respectiu._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-db.png)

### Menú principal 🗂

_Una vegada que hagueu triat la base de dades que voleu utilitzar, podreu visualitzar el menú principal, on us podreu moure per les diferents opcions, com crear tasques, llegir tasques, esborrar tasques..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-main-menu.png)

#### Crear tasca 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-create-task.png)

#### Llegir totes les tasques 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-2.png)

#### Llegir tasques completades ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-completed-tasks.png)

#### Llegir tasques pendents ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-pending-tasks.png)

#### Canvi pendent/completat 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-pending-completed.png)

#### Esborrar tasca 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-tem-delete-task.png)

#### Comentar tasca ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-comment-task.png)


## Construït amb 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Llenguatge de programació utilitzat.
* [Node.js](https://nodejs.org/es/docs/) - Entorn per executar JavaScript del costat del servidor.
* [NPM](https://www.npmjs.com/) - Administrador de dependències.
* [MongoDB](https://docs.mongodb.com/) - Base de dades no relacional utilitzat per al projecte.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM de MongoDB.
* [MySQL](https://dev.mysql.com/) - Base de dades relacionals utilitzades per al projecte.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - ORM de MySQL.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Biblioteca per crear una consola interactiva.
* [Colorette](https://github.com/jorgebucaran/colorette) - Biblioteca per afegir colors a la consola.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca per utilitzar variables d'entorn.

## Versionat 📌
_Hem utilitzat versions semàntiques [SemVer](http://semver.org/) per a aquesta aplicació. Per a totes les versions disponibles, consulteu les [etiquetes en aquest repositori](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Tingueu en compte que hi ha altres branques amb diferents tasques en aquest mateix repositori)._

## Autors ✒️
* [David Morales](https://github.com/dmoralesl) - *Estructura del projecte, servei de tasques, repositori mongoDB i correcció d'errors.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *Esquema de la BD, i repositori complet de MySQL.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Model de tasques, repositori JSON, interacció amb l'usuari i documentació del projecte.*

## Llicència 📄
_Aquest projecte està llicenciat sota la Llicència MIT - vegeu l'arxiu [LLICÈNCIA](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) per a més detalls._


## Com vam fer aquest projecte? 📝

_Per dur a terme aquest projecte ens hem organitzat amb la [github project tool](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), hem estat fent reunions setmanals de seguiment, assignant tasques i mantenint contacte pràcticament cada dia a través de discord._

_A la primera reunió vam acordar seguir tots el mateix camí a l'hora de dur a terme el projecte, també vam repartir les tasques que realitzaria cadascun dels membres de l'equip i vam començar a definir l'estructura._

_Per aplicar la [metodologia de gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) usem dev-teams com a branca de producció i dev-teams-develop com a branca de desenvolupament. Des de la branca de desenvolupament hem anat creant les branques per dur a terme les diferents tasques assignades (Per anomenar les branques de 'features' hem fet servir 'feature/#n' sent 'n' el nombre de tasca assignat per github project tool) i quan la tasca va ser completada i revisada, vam fer una sol·licitud de pull request des de la branca 'feature/#n' a la branca 'dev-teams-develop'._

_Per realitzar l'estructura del projecte teníem al cap diverses opcions, però ens vam decantar per aquesta ja que era la que millor s'adaptava al tipus de projecte que havíem de realitzar. A app > helpers > interaction.js hi ha tota la lògica de la interacció amb l'usuari realitzada amb [inquirer](https://www.npmjs.com/package/inquirer). A app > models > taskModel.js hi ha el model de tasques que hem fet servir per després fer els esquemes i models de les bases de dades, que estan a la carpeta de repositories. A app > services > taskServices.js és on es troben les funcions que s'encarreguen de realitzar un CRUD a través dels providers de les bases de dades. I app > app.js és el fitxer inicial, on unim el Task Service amb la interacció amb l'usuari executant-lo a través de la funció main()._

_Per últim esmentar que hem estat supervisant en tot moment que tot funcioni correctament i en les diferents reunions que hem tingut hem expressat els nostres dubtes, inquietuds i idees per millorar el projecte._