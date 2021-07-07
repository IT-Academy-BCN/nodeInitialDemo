

## Node Initial Demo

Estructura general de un proyecto node.js. Folder y files:

- <b>\_\_tests__</b>. Folder para tests Jest. Véanse [Jest Docs](https://jestjs.io/es-ES/docs/configuration).
- <b>app</b>:
    - <b>config</b>
    - <b>controllers</b>
    - <b>crons</b>
    - <b>middleware</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>tmp</b>
    - <b>app.js</b>. Entry point.
- <b>.env</b>. Environment descriptor. Véase [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>.eslintrc</b>. Linter JS, análisis estático de código. Véase [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Formatter de código. Véanse [Prettier Config](https://prettier.io/docs/en/configuration.html) y [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Gestor de procesos en tiempo de ejecución. Véanse [PM2 Docs](https://pm2.keymetrics.io/).
- <b>package.json</b>.

## Entrega d'exercici: Node REST Server
### Instrucciones
Esta API se desarrolló bajo NodeJS v10.16.2 y NPM v6.14.8. 

### Instalación
- Clonar proyecto
- Ejecute npm i
- Arranque el servidor con npm start, también puedes levantar el servidor con npm run dev, el cual hará uso de nodemon

### Endpoints
GET /user: ver info usuario

POST /upload: subir imagen .png, .jpg, .jpeg o .gif

post /time

### Postman collection link
https://www.getpostman.com/collections/2d8b2666f38b5b060c04
