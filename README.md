
# DevTeam's TO-DO App

## Initial Project README

### Project Structure

Main structure of node.js project. Folders / files:

- <b>\_\_tests__</b>. Tests folder. See [Jest Docs](https://jestjs.io/es-ES/docs/configuration) and [Chai Docs](https://www.chaijs.com/)
- <b>app</b>:
    - <b>config</b>
    - <b>controllers</b>
    - <b>crons</b>
    - <b>middleware</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>tmp</b>
    - <b>app.js</b>. Entry point.
- <b>.env</b>. Environment descriptor. See [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>.eslintrc</b>. Linter JS, static code analyzer. See [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Code formatter. See [Prettier Config](https://prettier.io/docs/en/configuration.html) and [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Process Manage at runtime. See [PM2 Docs](https://pm2.keymetrics.io/).
- <b>package.json</b>.

### Import project for use with WebStorm

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
![Open Project](img/webstorm_open.png)


### Import project for use with Visual Studio Code

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
  ![Open Project](img/VSC_open.png)


### Utilities

* [Node Developers Guide](https://nodejs.dev/learn)
* **.gitignore file** configuration. See [Official Docs](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files).
* **Git branches**. See [Official Docs](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

## App Architecture

Arquitectura típica de 3 capes, repartides entre les 3 integrants del grup:

![App Architecture](img/app_architecture.png)

|  **Component**   | **Integrant** |
|:----------------:|:-------------:|
|    UI Consola    |   Patricia    |
|  Business Logic  |     Laura     |
| Data integration |    Guillem    |


## Disseny de dades

### Casos d'ús
- Crear tasca
- Actualitzar tasca
- Esborrar tasca
- Llistar totes les tasques
- Llistar una tasca

### Model de dades SQL

#### Task Table
- id: int PK autoincrement not null
- Text: String not null
- Estat: enum(pendent, execució, acabades) not null
- Inici: Timestamp (pot ser null: podem afegir tasques una darrera l'altra i decidir l'inici de cada una d'elles més endavant a cas d'ús: actualitzar tasca)
- Final: Timestamp (null quan no s'ha acabat)
- Autor: int FK a User not null

#### User Table
  - id: int PK autoincrement not null
  - Nom: String not null

#### Observacions
- En crear una tasca, estaria bé que s'inicialitzés l'estat a pendent de manera automàtica (només haver de definir estat en cas que ja es trobi en execució o  finalitzada)

### Model JSON / MongoDB

#### tasks Collection
  - id: int (JSON) / _id: oid (MongoDB)
  - Text: String
  - Estat: enum(pendent, execució, acabades)
  - Inici: Timestamp
  - Final: Timestamp
  - Autor: String

#### Observacions
- Mantinc id/_id en tots els casos perquè caldrà poder recuperar tasques individualment
- De moment no incorporo més indexs perquè no hi ha cas d'ús que ho demani
- A JSON no sé com buscar una sola tasca dins del file, així que segurament acabaré carregant tot el file en memòria i guardar-lo tot quan es doni qualsevol modificació
- A JSON caldrà guardar un sol objecte perquè el format sigui vàlid: `{ "tasks": [{/*task1*/}, {/*task2*/}...]}`


## Diseny: Data integration

### dotenv

- Proposta: fer servir dotenv ([Documentació](#project-structure)) per carregar variable d'entorn que determini el tipus de permanència.
- Per no afectar la resta de capes de l'app, les 3 implementacions haurien de tenir la mateixa interfície d'ús.
- Començo implementant la integració amb MongoDB fent ús de Mongoose: seran les implementacions en JSON i MySQL les que s'acabin exposant a la resta de l'app amb la manera de fer de mongoose i no al revés.

### Suport al desenvolupament
- Webstorm no incorpora dotenv d'entrada als run configurations (per exemple debug no funciona), cal editar les configuracions del run: https://ihsanmjdeci.medium.com/webstorm-load-env-file-run-debug-test-configuration-904f343814da. A la nostra app: `-r dotenv/config`, `DOTENV_CONFIG_PATH=../.env`.

### Instruccions d'ús
- El que conté la branca a nivell d'app, com a lliurament de la meva activitat i fins que no s'integri amb el codi d'altres membres de l'equip, és una demo per provar les diferents implementacions de Tasks.
- Per correr la demo: `git clone`, `npm install`, `npm start`. També hi ha script `npm run dev` per iniciar aplicació amb `nodemon` en comptes de `node`.
- Abans d'executar els npm scripts, anar a `.env` i seleccionar el tipus de permanència que volem (opcions: "JSON", "MYSQL", "MONGODB").
- Si triem MongoDB, caldrà tenir una instància corrent en localhost : port 27017, o bé modificar la URI al mateix `.env` file. En producció, canviar la URI per la de producció a `.env`.
- Si triem MySQL, caldrà tenir una instància corernt en localhost i, a més: 
  - Crear les taules el primer cop que executem l'app (script `/mysql_scripts/mysql_schema.sql`).
  - Un cop executat l'script anterior, també caldrà crear l'usuari de l'app i donar-li els privilegis que calgui (script `/mysql_scripts/mysql_user.sql`). 
  - En producció, canviar el password perquè sigui segur (a `mysql_user.sql`i a `.env`) i canviar també la direcció del host de MySQLa `.env` pel real.
