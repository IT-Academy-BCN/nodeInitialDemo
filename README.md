
<<<<<<< HEAD
# Xat Sprint 5

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
=======
# DICES GAME

Simulació de un joc de daus. 

Per iniciar l'API: Ubicats a la carpeta ./ joc_daus > npm start 

Recomanable instalar nodemon > npm i nodemon 

Iniciar amb nodemon: ubicats a ./ joc_daus > nodemon  

IMPORTANT! En cas de no tenir instal·lat mongo com a servei o en cas que no s'inicie el servei automaticament
           es necessari teclejar amb un terminal adicional > mongod
           
A la carpeta ./joc_daus trobareu l'arxiu de la col·lecció POSTMAN per a realitzar les peticions.
També podeu utilitzar el vincle que comparteix la col·lecció.

https://www.postman.com/xaviercomi/workspace/public/collection/17998947-10220b4a-a607-456e-85e7-cf3c7953a7c8

COM UTILITZAR: 

NOTA * LLeguir la documentació de les peticions fent clic al menú "view documentaction", i un cop creats el jugadors
       utilizar el llistat (get all players), facilita l'ùs de les peticions i obtenció del "id" per a utilitzar l'API. 
       totes les peticions dirigides a un jugador en especial requereixen afegir el "id" del jugador al final de la ruta. 

![image](https://user-images.githubusercontent.com/85874705/143659824-9713e854-443c-48ea-9236-cc5280750935.png)


1. add a player: requereix entrar el nom del jugador a la pestanya de Body de POSTMAN
2. utilitzant el id del jugador crearem tirades de daus a rollDices. 
3. Després de comprovar el nombre de tirades (get number of throws) i el nombre de victories (get number of wins)
4. Actualitzarem el nombre de tirades (update throws), les victories(update wins) i el percentatge de victoria de cada jugador (update percentage)
5. Ara podrem obtenir el ranking del jugadors (get the ranking)
6. També podrem eliminar de forma individual o global els jugador i les tirades
7. Finalment podrem obtenir un llistat de jugadors amb totes les seves tirades (full content) i un llista simplificats dels jugadors.



>>>>>>> 24641cf878f952aa230b3acebeb2f807f384dad1
