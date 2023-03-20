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