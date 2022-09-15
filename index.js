const express = require("express"); 
const cors = require('cors');
const app = express();
const path = require('path');

const {userGet} = require('./controllers/user.js');
const {time} = require('./controllers/time.js');
const authe = require('./middlewares/auth.js');
const cache = require('./middlewares/cache.js');
const uploadPost  = require('./controllers/upload');
const fileUpload = require('express-fileupload');
const fileFilter = require('./middlewares/upload');
const error = require('./controllers/error');

// Habilitar la càrrega d'arxius
app.use(fileUpload({
  createParentPath: true,
  limits: { 
      fileSize: 6 * 1024 * 1024 * 1024 //6MB max file(s) size
  },
}));

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user', userGet);

app.post('/upload', fileFilter, uploadPost);

app.post('/time', cors(), authe, cache, time);

app.get("/*", error);
app.post("/*", error);
app.put("/*", error);
app.delete("/*", error);

app.listen(3000, () => { 
console.log("El servidor està inicialitzar al puerto 3000"); 
});