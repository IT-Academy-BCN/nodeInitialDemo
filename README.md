# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Project carried out as Sprint 3.3 work of the node.js course at IT Academy in Barcelona by [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) and [Daniel](https://github.com/DanielEspanadero)._

## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._

### Translations 💬

_This README file is also available in other languages:_
- [Catalan](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-cat.md)
- [French](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-fr.md)
- [German](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-de.md)
- [Italian](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-it.md)
- [Portuguese](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-pt.md)
- [Spanish](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)
- [Swedish](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-se.md)

### Pre requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQL Server](https://dev.mysql.com/downloads/)

### Installation 🔧

_Remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```

### Environment variables .env 🪛

For the MySQL database to work correctly, a username and password are required for each machine. To do this, you must create a file called .env and configure the environment variables MYSQL_USER and MYSQL_PASSWORD, defining the user and the password, respectively.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-mysql-env.png)

## Commands to run ⌨️

⚠️ BEFORE STARTING, REMEMBER TO HAVE THE MONGODB AND MYSQL SERVER STARTED ⚠️

_Once all the necessary programs and dependencies are installed, just run the command:_
```
npm start
```

## Project execution ⚙️

_If you have carried out the previous steps correctly, you will see an interactive menu, to move through it you can use the up ▲ and down arrow ▼ keys or if you prefer you can use the numbers on the keyboard._

### Database menu 📀

_The first menu you will see is the one that will allow you to select the database you want to use, you can choose JSON, MONGODB or MYSQL, remember that to use MONGODB or MYSQL you have to have the respective server activated._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-db.png)

### Main menu 🗂

_Once you have chosen the database you want to use, you will be able to view the main menu, where you can move through the different options, such as creating tasks, reading tasks, deleting tasks..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-main-menu.png)

#### Create task 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-create-task.png)

#### Read all tasks 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-2.png)

#### Read completed tasks ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-completed-tasks.png)

#### Read pending tasks ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-pending-tasks.png)

#### Change pending/completed 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-pending-completed.png)

#### Delete task 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-tem-delete-task.png)

#### Comment task ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-comment-task.png)

## Built with 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [MongoDB](https://docs.mongodb.com/) - Non-relational database used for the project.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Relational database used for the project.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Library for creating an interactive console.
* [Colorette](https://github.com/jorgebucaran/colorette) - Library to add colors to the console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Library to use environment variables.

## Versioned 📌
_We have used semantic versioning [SemVer](http://semver.org/) for this application. For all available versions, check out the [tags in this repository](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Note that there are other branches with different tasks in this same repository)._

## Authors ✒️
* [David Morales](https://github.com/dmoralesl) - *Project structure, task service, mongoDB repository and bug fixes.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *Schema of the BD, and complete repository of MySQL.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Task model, JSON repository, user interaction and project documentation.*

## License 📄
_This project is licensed under the MIT License - see the file [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) for details._


## How did we do this project? 📝

_To carry out this project we have organized ourselves with the [github project tool](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), we have been holding weekly follow-up meetings, assigning tasks and maintaining contact practically every day._

_In the first meeting we agreed to all follow the same path when carrying out the project, we also distributed the tasks that each of the team members was going to carry out and we started the repository structure._

_To apply the [gitflow methodology](https://datasift.github.io/gitflow/IntroducingGitFlow.html), we use dev-teams as the production branch and dev-teams-develop as the development branch. From the development branch we have been creating the branches to carry out the different assigned tasks (To name the feature branches we used 'feature/#n' being 'n' the task number assigned by github project tool) and once Once the task was completed and reviewed, we made a pull request from the 'feature/#n' branch to the 'dev-teams-develop' branch._

_To carry out the structure of the project, we had several options in mind, but we opted for this one since it was the one that best suited the type of project we had to carry out. In app > helpers > interaction.js is all the logic of the interaction with the user made with [inquirer](https://www.npmjs.com/package/inquirer). In app > models > taskModel.js there is the task model that we have used to later make the schemas and models of the databases, which are in the repositories folder. In app > services > taskServices.js is where the functions that are responsible for performing a CRUD through the database providers are. And app > app.js is the initial file, where we join the Task Service with the interaction with the user executing it through the main() function._

_Finally, mention that we have been supervising at all times that everything works correctly and in the different meetings that we have had we have expressed our doubts, concerns and ideas to improve the project._
