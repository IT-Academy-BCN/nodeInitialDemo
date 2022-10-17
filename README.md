# CHAT with SOCKET.IO, NODE.js, EXPRESS 
 
### Instructions:

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
Example of variables: 

```

DB_HOST=localhost
DB_PORT=27017
DB_NAME=chatterbox

API_PORT=3000

ACCESS_TOKEN_KEY=somethingwickedcomesthisway

```

Run server with

```
npm start
```

or in developer mode

```
npm run dev
```

The client and server are served by the same port 
through express static middleware.
If process.env.API_PORT variable is 3000, open browser and go to:

````
http://localhost:3000/
````

The user starts out on login page. There's an option to switch to register. The logo leads to about. 
![chat_login](https://user-images.githubusercontent.com/100954079/196165446-e30b963b-b8ed-4b6f-a26e-96c9bb8ed2b9.png)

Register has an option for getting back to login.
![chat_register](https://user-images.githubusercontent.com/100954079/196165412-7c0d9080-08bd-415b-b35e-85f0ac0fa4a6.png)

About has options to get back to logon via logo or a clickable text.
![chat_about](https://user-images.githubusercontent.com/100954079/196165481-3fda4bf7-7f6e-4f31-90aa-7351c1cf6fd8.png)

After successful authentication user gets access to app. 
The default room is Hall. 
Users can create and join rooms. 
There are lists of rooms and users.
Disconnect via icon. 
Only apt for desktop and tablet...
![chat_main](https://user-images.githubusercontent.com/100954079/196164700-c9cfa09c-dbbb-4839-9397-834b8fda7ae2.png)


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

connect to mongoDB (solution for ancient mac with MacOs high sierra):
https://www.mongodb.com/community/forums/t/error-couldnt-connect-to-server-127-0-0-1-27017/705/8

1. cd /Users
2. cd to your home directory
3. mkdir data
4. cd data
5. mkdir db
6. mongod --dbpath ~/data/db press enter then just keep it running.

---------------------------------------------------------------------------
When shutting down and restarting erase added /data/db structure and start allover...

### MONGOOSE:

MongoDB deployed as persistence with mongoose as ORM.

https://mongoosejs.com/
https://mongoosejs.com/docs/api/document.html#document_Document-validate

### AUTHENTICATION:
bcryptjs (bcrypt not compatible with ancient macs...) and jsonwebtoken modules.

https://frontegg.com/blog/jwt-authentication
https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/

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

### TODO on a rainy day...

- add google auth
- add refresh token
- add @media for smartphones
- add user can only have on session
- investigate if it matters if you npm init inside server folder or outside?
- add colors to chat bubbles
- do frontend with react...
- improve design
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










