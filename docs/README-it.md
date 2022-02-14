# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Progetto realizzato come lavoro per Sprint 3.3 del corso node.js presso IT Academy Barcelona da [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) e [ Daniel](https://github.com/DanielEspanadero)._

## A partire 🚀

_Queste istruzioni ti permetteranno di ottenere una copia funzionante del progetto sulla tua macchina locale per scopi di sviluppo e test._

### Traduzioni 💬

_Questo file README è disponibile anche in altre lingue:_
- [Catalano](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Francese](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-fr.md)
- [Inglese](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)
- [Portoghese](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-pt.md)
- [Tedesco](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-de.md)
- [Spagnolo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)
- [Svedese](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-se.md)

### Prerequisiti 📋

_Affinché il progetto funzioni correttamente, si consiglia di avere una serie di programmi installati e opportunamente configurati:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQLServer](https://dev.mysql.com/downloads/)

### Installazione 🔧

_Ricordati di eseguire il seguente comando nel terminale per installare le dipendenze e che tutto funzioni correttamente:_
```
npm install
```

### Variabili d'ambiente .env 🪛

Affinché il database MySQL funzioni correttamente, sono richiesti un nome utente e una password per ogni macchina. Per fare ciò è necessario creare un file denominato .env e configurare le variabili di ambiente MYSQL_USER e MYSQL_PASSWORD, definendo rispettivamente l'utente e la password.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-mysql-env.png)

## Comandi da eseguire ⌨️

⚠️ PRIMA DI INIZIARE, RICORDA DI AVERE AVVIATO IL SERVER MONGODB E MYSQL ⚠️

_Una volta installati tutti i programmi e le dipendenze necessari, eseguire semplicemente il seguente comando:_
```
npm start
```

## Esecuzione del progetto ⚙️

_Se hai eseguito correttamente i passaggi precedenti, vedrai un menu interattivo, per spostarti puoi usare i tasti freccia su ▲ e freccia giù ▼ o se preferisci puoi usare i numeri sulla tastiera._

### Menù Database 📀

_Il primo menu che vedrai è quello che ti permetterà di selezionare il database che vuoi utilizzare, puoi scegliere JSON, MONGODB o MYSQL, ricorda che per usare MONGODB o MYSQL devi avere il rispettivo server attivato._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-db.png)

### Menù principale 🗂

_Una volta scelto il database che desideri utilizzare, sarai in grado di visualizzare il menu principale, dove puoi spostarti tra le diverse opzioni, come creare attività, leggere attività, eliminare attività..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-main-menu.png)

#### Crea attività 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-create-task.png)

#### Leggi tutte le attività 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-2.png)

#### Leggi le attività completate ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-completed-tasks.png)

#### Leggi le attività in sospeso ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-pending-tasks.png)

#### Modifica in sospeso/completata 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-pending-completed.png)

#### Elimina attività 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-tem-delete-task.png)

#### Commenta i compiti ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-comment-task.png)

## Costruito con 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguaggio di programmazione utilizzato.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente per eseguire JavaScript sul lato server.
* [NPM](https://www.npmjs.com/) - Gestore delle dipendenze.
* [MongoDB](https://docs.mongodb.com/) - Database non relazionale utilizzato per il progetto.
* [Mangusta](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Database relazionale utilizzato per il progetto.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Libreria per creare una console interattiva.
* [Colorette](https://github.com/jorgebucaran/colorette) - Libreria per aggiungere colori alla console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Libreria per utilizzare le variabili di ambiente.

## Versione 📌
_Abbiamo usato versioni semantiche [SemVer](http://semver.org/) pera questa app. Per tutte le versioni disponibili, controlla i [tag in questo repository](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (nota che ci sono altri rami con attività diverse in questo stesso repository). _

## Autori ✒️
* [David Morales](https://github.com/dmoralesl) - *Struttura del progetto, servizio attività, repository mongoDB e correzioni di bug.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *Schema DB e repository MySQL completo.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Modello di attività, repository JSON, interazione con l'utente e documentazione del progetto.*

## Licenza 📄
_Questo progetto è concesso in licenza con la licenza MIT - vedere il file [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) per maggiori dettagli._


## Come abbiamo realizzato questo progetto? 📝

_Per realizzare questo progetto ci siamo organizzati con [github project tool](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), abbiamo tenuto incontri settimanali di follow-up, assegnando compiti e mantenendo praticamente i contatti ogni giorno tramite discordia._

_Nel primo incontro abbiamo deciso tutti di seguire lo stesso percorso nella realizzazione del progetto, abbiamo anche distribuito i compiti che ciascuno dei membri del team avrebbe svolto e abbiamo iniziato a definire la struttura._

_Per applicare la [metodologia gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) utilizziamo dev-teams come ramo di produzione e dev-teams-develop come ramo di sviluppo. Dal ramo di sviluppo abbiamo creato i rami per svolgere i diversi compiti assegnati (per nominare i rami 'caratteristiche' usiamo 'feature/#n' dove 'n' è il numero del compito assegnato dallo strumento di progetto github) e un Una volta che l'attività è stata completata e rivista, abbiamo effettuato una richiesta pull dal ramo 'feature/#n' al ramo 'dev-teams-develop'._

_Per realizzare la struttura del progetto avevamo in mente diverse opzioni, ma abbiamo optato per questa perché era quella più adatta al tipo di progetto che dovevamo realizzare. In app > helpers > interaction.js c'è tutta la logica dell'interazione con l'utente effettuata con [inquirer](https://www.npmjs.com/package/inquirer). In app > models > taskModel.js c'è il modello di attività che abbiamo utilizzato per creare in seguito gli schemi e i modelli dei database, che si trovano nella cartella dei repository. In app> services> taskServices.js è dove si trovano le funzioni responsabili dell'esecuzione di un CRUD tramite i provider di database. E app > app.js è il file iniziale, in cui leghiamo il Task Service con l'interazione dell'utente eseguendolo tramite la funzione main()._

_Infine, ricorda che abbiamo sempre vigilato affinché tutto funzionasse correttamente e nei diversi incontri che abbiamo avuto abbiamo espresso i nostri dubbi, preoccupazioni e idee per migliorare il progetto._