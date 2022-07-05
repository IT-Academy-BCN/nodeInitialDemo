# CHAT with Socket.io

Instructions:
Clone repository.

Initialize terminal from inside the project folder.
Install node modules.

```
npm install

```
Convert .env.example to .env and adapt variables to pertinent environment i.e url for MongoDB.

Run server with

```
npm start
```

or in developer mode

```
npm run dev
```



# Sockets

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want.







# Node Initial Project

### Project Structure

Main structure of node.js project. 

- <b>app</b>:
    - <b>controllers</b>
    - <b>middleware</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>utils</b>
    - <b>.env.example</b>
    - <b>app.js</b>. Entry point.
- <b>.env</b>. Environment descriptor. See [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>.eslintrc</b>. Linter JS, static code analyzer. See [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Code formatter. See [Prettier Config](https://prettier.io/docs/en/configuration.html) and [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Process Manage at runtime. See [PM2 Docs](https://pm2.keymetrics.io/).
- <b>package.json</b>.



Sources:
https://socket.io/get-started/chat
https://mongoosejs.com/
https://stackfame.com/mongodb-chat-schema-mongoose-chat-schema-chat-application