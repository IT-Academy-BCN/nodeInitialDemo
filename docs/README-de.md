# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Projekt durchgeführt als Arbeit für Sprint 3.3 des node.js-Kurses an der IT Academy Barcelona von [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) und [ Daniel](https://github.com/DanielEspanadero)._

## Ab 🚀

_Mit diesen Anweisungen können Sie zu Entwicklungs- und Testzwecken eine Arbeitskopie des Projekts auf Ihrem lokalen Computer erstellen._

### Übersetzungen 💬

_Diese README-Datei ist auch in anderen Sprachen verfügbar:_
- [Englisch](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)
- [Katalanisch](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Spanisch](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)

### Voraussetzungen 📋

_Damit das Projekt korrekt funktioniert, wird empfohlen, eine Reihe von Programmen installiert und richtig konfiguriert zu haben:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js und npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQLServer](https://dev.mysql.com/downloads/)

### Einbau 🔧

_Denken Sie daran, den folgenden Befehl im Terminal auszuführen, um die Abhängigkeiten zu installieren und dass alles korrekt funktioniert:_
```
npm install
```

### Umgebungsvariablen .env 🪛

Damit die MySQL-Datenbank ordnungsgemäß funktioniert, sind für jeden Computer ein Benutzername und ein Kennwort erforderlich. Dazu müssen Sie eine Datei namens .env erstellen und die Umgebungsvariablen MYSQL_USER und MYSQL_PASSWORD konfigurieren, indem Sie den Benutzer bzw. das Passwort definieren.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-mysql-env.png)

## Befehle zum Ausführen von ⌨️

⚠️ BEVOR SIE STARTEN, DENKEN SIE DARAN, DEN MONGODB- UND MYSQL-SERVER GESTARTET ZU HABEN ⚠️

_Sobald alle notwendigen Programme und Abhängigkeiten installiert sind, führen Sie einfach den folgenden Befehl aus:_
```
npm start
```

## Projektdurchführung ⚙️

_Wenn Sie die vorherigen Schritte korrekt ausgeführt haben, sehen Sie ein interaktives Menü. Um sich darin zu bewegen, können Sie die Pfeiltasten nach oben ▲ und nach unten ▼ verwenden, oder wenn Sie es vorziehen, können Sie die Zahlen auf der Tastatur verwenden._

### Datenbankmenü 📀

_Das erste Menü, das Sie sehen, ist dasjenige, in dem Sie die Datenbank auswählen können, die Sie verwenden möchten. Sie können JSON, MONGODB oder MYSQL auswählen. Denken Sie daran, dass Sie zur Verwendung von MONGODB oder MYSQL den jeweiligen Server aktiviert haben müssen._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-db.png)

### Hauptmenü 🗂

_Sobald Sie die Datenbank ausgewählt haben, die Sie verwenden möchten, können Sie das Hauptmenü anzeigen, in dem Sie durch die verschiedenen Optionen navigieren können, z. B. Aufgaben erstellen, Aufgaben lesen, Aufgaben löschen..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-main-menu.png)

#### Aufgabe erstellen 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-create-task.png)

#### Alle Aufgaben lesen 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-all-tasks-2.png)

#### Erledigte Aufgaben lesen ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-completed-tasks.png)

#### Ausstehende Aufgaben lesen ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-read-pending-tasks.png)

#### Änderung ausstehend/abgeschlossen 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-pending-completed.png)

#### Aufgabe löschen 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-tem-delete-task.png)

#### Hausaufgaben kommentieren ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/feature/%2317/docs/dev-team-comment-task.png)

## Gebaut mit 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Verwendete Programmiersprache.
* [Node.js](https://nodejs.org/es/docs/) – Umgebung zum Ausführen von JavaScript auf der Serverseite.
* [NPM](https://www.npmjs.com/) - Abhängigkeitsmanager.
* [MongoDB](https://docs.mongodb.com/) – Nicht relationale Datenbank, die für das Projekt verwendet wird.
* [Mongoose](https://mongoosejs.com/docs/guide.html) – MongoDB-ODM.
* [MySQL](https://dev.mysql.com/) – Für das Projekt verwendete relationale Datenbank.
* [MySQL 2](https://www.npmjs.com/package/mysql2) – MySQL-ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) – Bibliothek zum Erstellen einer interaktiven Konsole.
* [Colorette](https://github.com/jorgebucaran/colorette) - Bibliothek zum Hinzufügen von Farben zur Konsole.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Bibliothek zur Verwendung von Umgebungsvariablen.

## Versioniert 📌
_Wir haben für diese Anwendung semantische Versionen [SemVer](http://semver.org/) verwendet. Überprüfen Sie für alle verfügbaren Versionen die [Tags in diesem Repository](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Beachten Sie, dass es in demselben Repository andere Branches mit unterschiedlichen Aufgaben gibt)._

## Autoren ✒️
* [David Morales](https://github.com/dmoralesl) - *Projektstruktur, Aufgabendienst, MongoDB-Repository und Fehlerbehebungen.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *DB-Schema und vollständiges MySQL-Repository.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Aufgabenmodell, JSON-Repository, Benutzerinteraktion und Projektdokumentation.*

## Lizenz 📄
_Dieses Projekt ist unter der MIT-Lizenz lizenziert – weitere Einzelheiten finden Sie in der Datei [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE)._


## Wie haben wir dieses Projekt durchgeführt? 📝

_Zur Durchführung dieses Projekts haben wir uns mit dem [github project tool](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1) selbst organisiert, wöchentliche Follow-up-Meetings abgehalten, Aufgaben verteilt und den Kontakt praktisch gepflegt jeden Tag über Discord._

_Beim ersten Treffen einigten wir uns alle darauf, den gleichen Weg bei der Durchführung des Projekts zu gehen, wir verteilten auch die Aufgaben, die jedes der Teammitglieder ausführen würde, und wir begannen, die Struktur zu definieren._

_Um die [Gitflow-Methodik](https://datasift.github.io/gitflow/IntroducingGitFlow.html) anzuwenden, verwenden wir dev-teams als Produktionszweig und dev-teams-develop als Entwicklungszweig. Aus dem Entwicklungszweig haben wir die Zweige erstellt, um die verschiedenen zugewiesenen Aufgaben auszuführen (um die Zweige „Features“ zu benennen, verwenden wir „feature/#n“, wobei „n“ die vom Github-Projekttool zugewiesene Aufgabennummer ist) und a Sobald die Aufgabe abgeschlossen und überprüft war, haben wir eine Pull-Anforderung vom Zweig „feature/#n“ an den Zweig „dev-teams-develop“ gesendet._

_Um die Struktur des Projekts umzusetzen, hatten wir mehrere Optionen im Sinn, aber wir haben uns für diese entschieden, da sie für die Art des Projekts, das wir durchführen mussten, am besten geeignet war. In App > Helfer > Interaktion.js befindet sich die gesamte Logik der Interaktion mit dem Benutzer, die mit [inquirer](https://www.npmjs.com/package/inquirer) durchgeführt wird. In app > models > taskModel.js befindet sich das Aufgabenmodell, das wir verwendet haben, um später die Schemata und Modelle der Datenbanken zu erstellen, die sich im Ordner "repositories" befinden. In app > services > taskServices.js befinden sich die Funktionen, die für die Durchführung eines CRUD über die Datenbankanbieter verantwortlich sind. Und app > app.js ist die Anfangsdatei, in der wir den Task Service mit der Benutzerinteraktion binden, indem wir ihn über die Funktion main() ausführen._

_Erwähnen Sie zum Schluss, dass wir zu jeder Zeit überwacht haben, dass alles richtig funktioniert, und in den verschiedenen Besprechungen, die wir hatten, unsere Zweifel, Bedenken und Ideen zur Verbesserung des Projekts geäußert haben._