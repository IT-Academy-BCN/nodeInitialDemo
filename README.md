# CHAT with Socket.io

Instructions:
Clone repository.

```
cd server
```
Initialize terminal from inside the project folder.
Install node modules.

```
npm install

```
Convert .env.example to .env and adapt pertinent variables to current environment. 
Current variables: 

```
PORT=3000
DB_HOST=local
DB_PORT=27017
DB_NAME=chatterbox
```

Run server with

```
npm start
```

or in developer mode

```
npm run dev
```

The client and server are served by same port through express static middleware.
If process.env.PORT variable is 3000 open browser and go to:

````
http://localhost:3000/
````


### SERVER

Server runs with express and http modules.

Connecting frontend - backend:
https://stackabuse.com/serving-static-files-with-node-and-express-js/

### SOCKET.io

Basics:
https://socket.io/get-started/chat

Rooms:
https://socket.io/docs/v3/rooms/
https://www.geeksforgeeks.org/how-to-manage-users-in-socket-io-in-node-js/

Socket.io cheatsheet:
https://socket.io/docs/v4/emit-cheatsheet/#server-side

Authenticate sockets:
https://stackoverflow.com/questions/36788831/authenticating-socket-io-connections-using-jwt

One socket/ user:
https://medium.com/hackernoon/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a


### MONGODB:

connect to mongoDB (solution to connection issue for mac OS high sierra):

1. cd to your home directory
2. cd data
3. mongod --dbpath ~/data/db press enter then just keep it running.

### MONGOOSE:

MongoDB deployed as persistence with mongoose as ORM.

https://mongoosejs.com/
https://mongoosejs.com/docs/api/document.html#document_Document-validate

### FRONT END:

GENERAL (stitching together a chat):

https://github.com/StratocasterO/masterclasses-it-academy/tree/master/2022_07_12%20frontend

https://stackfame.com/mongodb-chat-schema-mongoose-chat-schema-chat-application

registration form
https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/

shadow effect
https://www.w3schools.com/howto/howto_css_cards.asp

query selector
https://www.w3schools.com/jsref/met_document_queryselector.asp
https://dev.to/eidorianavi/queryselector-vs-getelementbyid-gm1

form action
https://www.w3schools.com/tags/att_form_action.asp

logout
https://stackoverflow.com/questions/29952249/how-to-create-log-out-script-parse-javascript

autofocus
https://www.w3schools.com/tags/att_input_autofocus.asp

icons
https://fontawesome.com/icons

hover dropdown
https://www.w3schools.com/howto/howto_css_dropdown.asp

animated input
https://www.w3schools.com/howto/howto_css_animated_search.asp

add option elements to select
https://javascript.plainenglish.io/how-to-add-options-to-an-html-select-element-with-javascript-97c8bc64932c

sort unordered list
//https://es.stackoverflow.com/questions/259945/ordenar-ul-javascript


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
- <b>package.json</b>.










