# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Projet réalisé dans le cadre du Sprint 3.3 du cours node.js à l'IT Academy Barcelona par [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) et [ Daniel](https://github.com/DanielEspanadero)._

## Démarrage 🚀

_Ces instructions vous permettront d'obtenir une copie de travail du projet sur votre machine locale à des fins de développement et de test._

### Traductions 💬

_Ce fichier README est également disponible dans d'autres langues:_
- [Catalan](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Anglais](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)

### Prérequis 📋

_Pour que le projet fonctionne correctement, il est recommandé d'avoir une série de programmes installés et correctement configurés:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js et npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQLServer](https://dev.mysql.com/downloads/)

### Installation 🔧

_N'oubliez pas d'exécuter la commande suivante dans le terminal pour installer les dépendances et que tout fonctionne correctement :_
```
npm install
```

### Variables d'environnement .env 🪛

Pour que la base de données MySQL fonctionne correctement, un nom d'utilisateur et un mot de passe sont requis pour chaque machine. Pour ce faire, vous devez créer un fichier appelé .env et configurer les variables d'environnement MYSQL_USER et MYSQL_PASSWORD, définissant respectivement l'utilisateur et le mot de passe.

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-mysql-env.png)

## Commandes à exécuter ⌨️

⚠️ AVANT DE COMMENCER, PENSEZ A AVOIR DEMARRE LE SERVEUR MOGODB ET MYSQL ⚠️

_Une fois tous les programmes et dépendances nécessaires installés, exécutez simplement la commande suivante :_
```
npm start
```

## Exécution du projet ⚙️

_Si vous avez correctement effectué les étapes précédentes, vous verrez un menu interactif, pour le parcourir, vous pouvez utiliser les touches fléchées vers le haut ▲ et vers le bas ▼ ou si vous préférez, vous pouvez utiliser les chiffres du clavier._

### Menu Base de données 📀

_Le premier menu que vous verrez est celui qui vous permettra de sélectionner la base de données que vous souhaitez utiliser, vous pouvez choisir JSON, MONGODB ou MYSQL, rappelez-vous que pour utiliser MONGODB ou MYSQL, vous devez activer le serveur respectif._

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-db.png)

### Menu principal 🗂

_Une fois que vous avez choisi la base de données que vous souhaitez utiliser, vous pourrez afficher le menu principal, où vous pourrez parcourir les différentes options, telles que la création de tâches, la lecture de tâches, la suppression de tâches..._

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-main-menu.png)

#### Créer une tâche 📝

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-create-task.png)

#### Lire toutes les tâches 📖

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-all-tasks-1.png)

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-all-tasks-2.png)

#### Lire les tâches terminées ✔️

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-completed-tasks.png)

#### Lire les tâches en attente ❌

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-pending-tasks.png)

#### Modification en attente/terminée 🚥

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-pending-completed.png)

#### Supprimer la tâche 🗑🔥🧨

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-tem-delete-task.png)

#### Commentez les devoirs ✍️

![Démo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-comment-task.png)

## Construit avec 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Langage de programmation utilisé.
* [Node.js](https://nodejs.org/es/docs/) - Environnement pour exécuter JavaScript côté serveur.
* [NPM](https://www.npmjs.com/) - Gestionnaire de dépendances.
* [MongoDB](https://docs.mongodb.com/) - Base de données non relationnelle utilisée pour le projet.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Base de données relationnelle utilisée pour le projet.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Bibliothèque pour créer une console interactive.
* [Colorette](https://github.com/jorgebucaran/colorette) - Bibliothèque pour ajouter des couleurs à la console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Bibliothèque pour utiliser les variables d'environnement.

## Versionné 📌
_Nous avons utilisé des versions sémantiques [SemVer](http://semver.org/) pourà cette application. Pour toutes les versions disponibles, vérifiez les [tags dans ce référentiel](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Notez qu'il existe d'autres branches avec des tâches différentes dans ce même référentiel). _

## Auteurs ✒️
* [David Morales](https://github.com/dmoralesl) - *Structure du projet, service de tâches, référentiel mongoDB et corrections de bogues.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *Schéma DB et référentiel MySQL complet.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Modèle de tâche, référentiel JSON, interaction utilisateur et documentation du projet.*

## Licence 📄
_Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) pour plus de détails._


## Comment avons-nous réalisé ce projet? 📝

_Pour mener à bien ce projet, nous nous sommes organisés avec [l'outil de projet github](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), nous avons organisé des réunions de suivi hebdomadaires, attribué des tâches et maintenu le contact pratiquement tous les jours via discord._

_Lors de la première réunion, nous avons tous convenu de suivre le même chemin lors de la réalisation du projet, nous avons également réparti les tâches que chacun des membres de l'équipe allait effectuer et nous avons commencé à définir la structure._

_Pour appliquer la [méthodologie gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), nous utilisons dev-teams comme branche de production et dev-teams-develop comme branche de développement. À partir de la branche de développement, nous avons créé les branches pour effectuer les différentes tâches assignées (pour nommer les branches 'fonctionnalités', nous utilisons 'fonctionnalité/#n' où 'n' est le numéro de tâche attribué par l'outil de projet github) et un Une fois la tâche terminée et examinée, nous avons fait une pull request de la branche 'feature/#n' vers la branche 'dev-teams-develop'._

_Pour réaliser la structure du projet nous avions plusieurs options en tête, mais nous avons opté pour celle-ci car c'était celle qui convenait le mieux au type de projet que nous devions réaliser. Dans app > helpers > interaction.js se trouve toute la logique de l'interaction avec l'utilisateur faite avec [inquirer](https://www.npmjs.com/package/inquirer). Dans app > models > taskModel.js se trouve le modèle de tâche que nous avons utilisé pour créer ultérieurement les schémas et les modèles des bases de données, qui se trouvent dans le dossier des référentiels. Dans app > services > taskServices.js se trouvent les fonctions chargées d'effectuer un CRUD via les fournisseurs de bases de données. Et app > app.js est le fichier initial, où nous lions le service de tâches avec l'interaction de l'utilisateur en l'exécutant via la fonction main()._

_Enfin, mentionnez que nous avons supervisé à tout moment que tout fonctionne correctement et lors des différentes réunions que nous avons eues, nous avons exprimé nos doutes, nos préoccupations et nos idées pour améliorer le projet._