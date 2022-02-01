
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

Arquitectura típica de 3 capes:

<img src="img/app_architecture.png" alt="App Architecture" width=140 style="display: block; margin-left: auto; margin-right: auto">

Les quals hem repartit entre les 3 integrants del grup:

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
- Inici: Timestamp (pot ser null: podem afegir tasques una darrera l'altra i decidir l'inici de cada una d'elles més endavant >> Cas d'ús: actualitzar tasca)
- Final: Timestamp (null quan no s'ha acabat)
- Autor: int FK a Usuari not null

#### User Table
  - id: int PK autoincrement not null
  - Nom: String not null

#### Observacions
- En crear una tasca, estaria bé que s'inicialitzés l'estat a pendent de manera automàtica (només haver d'explicitar si ja es troba en execució o  finalitzada)

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
- De moment no indexo també per autor perquè no hi ha cas d'ús que suporti la necessitat
- A JSON no sé com buscar una sola tasca dins del file, així que segurament caldrà carregar tot el file en memòria i guardar-lo tot quan es doni qualsevol modificació
- A JSON caldrà guardar un sol objecte perquè sigui vàlid: `{ "tasks": [{/*task1*/}, {/*task2*/}...]}`


## Diseny: Data integration

### dotenv

- Proposta: fer servir dotenv (documentació a README inicial de `nodeInitialDemo`) per carregar variable d'entorn que determini el tipus de permanència.
- Per no afectar la resta de capes de l'app, les 3 implementacions hauríen de tenir la mateixa interfície d'ús.
- Començo implementant la integració amb MongoDB fent ús de Mongoose: seran les implementacions en JSON i MySQL les que s'acabin exposant a la resta de l'app amb la manera de fer de mongoose i no al revés.
