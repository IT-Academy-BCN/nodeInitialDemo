# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Projekt utfört som arbete för Sprint 3.3 av node.js-kursen på IT Academy Barcelona av [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) och [ Daniel](https://github.com/DanielEspanadero)._

## Börjar 🚀

_De här instruktionerna låter dig få en arbetskopia av projektet på din lokala dator för utvecklings- och testsyften._

### Översättningar 💬

_Denna README-fil är även tillgänglig på andra språk:_
- [Franska](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-fr.md)
- [Engelsk](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)
- [Italienska](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-it.md)
- [Katalanska](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Portugisiska](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-pt.md)
- [Spanska](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)
- [Tysk](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-de.md)

### Förutsättningar 📋

_För att projektet ska fungera korrekt rekommenderas det att ha en serie program installerade och korrekt konfigurerade:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js och npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQLServer](https://dev.mysql.com/downloads/)

### Installation 🔧

_Kom ihåg att köra följande kommando i terminalen för att installera beroenden och att allt fungerar korrekt:_
```
npm install
```

### Miljövariabler .env 🪛

För att MySQL-databasen ska fungera korrekt krävs ett användarnamn och lösenord för varje maskin. För att göra detta måste du skapa en fil som heter .env och konfigurera miljövariablerna MYSQL_USER och MYSQL_PASSWORD, som definierar användaren respektive lösenordet.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-mysql-env.png)

## Kommandon att köra ⌨️

⚠️ KOM IHÅG ATT HA MONGODB OCH MYSQL-SERVERN INNAN DU STARTAR ⚠️

_När alla nödvändiga program och beroenden är installerade kör du helt enkelt följande kommando:_
```
npm start
```

## Projektgenomförande ⚙️

_Om du har utfört de föregående stegen korrekt kommer du att se en interaktiv meny, för att gå igenom den kan du använda uppåtpilarna ▲ och nedåtpilarna ▼ eller om du föredrar kan du använda siffrorna på tangentbordet._

### Databasmeny 📀

_Den första menyn du kommer att se är den som låter dig välja den databas du vill använda, du kan välja JSON, MONGODB eller MYSQL, kom ihåg att för att använda MONGODB eller MYSQL måste du ha respektive server aktiverad._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-db.png)

### Huvudmeny 🗂

_När du har valt den databas du vill använda kommer du att kunna se huvudmenyn, där du kan gå igenom de olika alternativen, som att skapa uppgifter, läsa uppgifter, ta bort uppgifter..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-main-menu.png)

#### Skapa uppgift 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-create-task.png)

#### Läs alla uppgifter 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-2.png)

#### Läs utförda uppgifter ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-completed-tasks.png)

#### Läs väntande uppgifter ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-pending-tasks.png)

#### Ändring väntar/slutförd 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-pending-completed.png)

#### Ta bort uppgift 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-tem-delete-task.png)

#### Kommentera läxor ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-comment-task.png)

## Byggd med 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programmeringsspråk som används.
* [Node.js](https://nodejs.org/es/docs/) - Miljö för att köra JavaScript på serversidan.
* [NPM](https://www.npmjs.com/) – Beroendehanterare.
* [MongoDB](https://docs.mongodb.com/) – Icke-relationell databas som används för projektet.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Relationsdatabas som används för projektet.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) – Bibliotek för att skapa en interaktiv konsol.
* [Colorette](https://github.com/jorgebucaran/colorette) - Bibliotek för att lägga till färger till konsolen.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Bibliotek för att använda miljövariabler.

## Versionerad 📌
_Vi har använt semantiska versioner [SemVer](http://semver.org/) förtill den här appen. För alla tillgängliga versioner, kontrollera [taggarna i det här arkivet](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Observera att det finns andra grenar med olika uppgifter i samma arkiv)._

## Författare ✒️
* [David Morales](https://github.com/dmoralesl) - *Projektstruktur, uppgiftstjänst, mongoDB-förråd och buggfixar.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *DB-schema och komplett MySQL-förråd.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Uppgiftsmodell, JSON-förråd, användarinteraktion och projektdokumentation.*

## Licens 📄
_Det här projektet är licensierat under MIT-licensen - se filen [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) för mer information._

## Hur gjorde vi det här projektet? 📝

_För att genomföra detta projekt har vi organiserat oss med [github-projektverktyget](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), vi har hållit veckovisa uppföljningsmöten, tilldelat uppgifter och upprätthållit kontakt praktiskt taget varje dag via discord._

_I det första mötet kom vi alla överens om att följa samma väg när vi genomförde projektet, vi fördelade också de uppgifter som var och en av teammedlemmarna skulle utföra och vi började definiera strukturen._

_För att tillämpa [gitflow-metoden](https://datasift.github.io/gitflow/IntroducingGitFlow.html) använder vi dev-teams som produktionsgren och dev-teams-develop som utvecklingsgren. Från utvecklingsgrenen har vi skapat grenarna för att utföra de olika tilldelade uppgifterna (för att namnge 'funktionsgrenarna' använder vi 'feature/#n' där 'n' är uppgiftsnumret som tilldelas av github-projektverktyget) och en När uppgiften var klar och granskad gjorde vi en pull-begäran från grenen 'feature/#n' till grenen 'dev-teams-develop'._

_För att genomföra projektets struktur hade vi flera alternativ i åtanke, men vi valde detta eftersom det var det som bäst passade den typ av projekt vi skulle genomföra. I app > helpers > interaction.js är all logik i interaktionen med användaren som görs med [inquirer](https://www.npmjs.com/package/inquirer). I app > modeller > taskModel.js finns uppgiftsmodellen som vi har använt för att senare göra scheman och modeller för databaserna, som finns i repositories-mappen. I app > tjänster > taskServices.js finns de funktioner som är ansvariga för att utföra en CRUD genom databasleverantörerna. Och app > app.js är den initiala filen, där vi binder Task Service med användarinteraktionen genom att köra den via main()-funktionen._

_Nämn slutligen att vi hela tiden har övervakat att allt fungerar som det ska och på de olika möten vi har haft har vi uttryckt våra tvivel, oro och idéer för att förbättra projektet._