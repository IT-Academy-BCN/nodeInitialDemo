# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻
_Project carried out as Sprint 3.3 work of the node.js course at IT Academy in Barcelona by [Razon](https://github.com/razondpro), [Laura](https://github.com/) and [Pau](https://github.com/)._

## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._

### Pre requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Docker](https://www.docker.com/)

### Installation 🔧

_Remember to execute the following commands in the terminal to create docker images and run containers:_

```
docker network create initialnw
docker compose up -d

```
## Commands to run ⌨️

_Once all the necessary images and containers are installed and running up:_
```
docker exec -it node-container sh
npm start
```

## Stop and remove containers
_Once you are done with testing, run following command to stop the docker containers_

```
docker compose down
```

## Built with 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [MongoDB](https://docs.mongodb.com/) - Non-relational database used for the project.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Relational database used for the project.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Library for creating an interactive console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Library to use environment variables.
* [Docker](https://www.docker.com/) - Platform for virtualization OS level software.

## Authors ✒️
* [Razon](https://github.com/razondpro) - *Project management, structure, docker, data modelling and bug fixes.*
* [Laura](https://github.com/) - *.*
* [Pau](https://github.com/) - *.*

## License 📄
_This project is licensed under the MIT License - see the file [LICENSE](https://github.com) for details._