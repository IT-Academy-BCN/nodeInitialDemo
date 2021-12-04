const express = require('express');
const cors = require('cors');
// TODO limpiar todos los TODO!!
const app = express();
const port = 3000;
const timeRouter = require('../routes/time-router');
const uploadRouter = require('../routes/upload-router');
const { noCacheMiddleware } = require('../handlers/all-handlers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO borrar todos los console.log innecessarios
// TODO importante:: tenes que sacar la carpeta upload del ignore, pero si su contenido

//* ***Se puede probar el upload de la imagen desde http://localhost:3000/upload en el navegador */

// TODO sacame de aca y poneme en otro lugar!
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

app.use(requestLogger);
// TODO agregar una descripcion a cada ruta!!!
app.use(express.static('uploads'));

// TODO ver si es necesario ponerle la ruta que  va antes o un asterisco! ver en que posicion l ovas a poner!
app.use(noCacheMiddleware);

//----------------------------------

app.get('/', (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.json({ name: 'Mariano', age: '33', 'req url': `${fullUrl}` });
});

app.use('/upload', uploadRouter);

app.use('/time', timeRouter);

app.listen(port, () => {
  console.log(`CORS-enabled web server listening at http://localhost:${port}`);
});
