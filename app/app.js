const express = require('express');

const app = express();
const cors = require('cors');

const port = 3000;
const timeRouter = require('../routes/time-router');
const uploadRouter = require('../routes/upload-router');
const { noCacheMiddleware, nameAndAge } = require('../handlers/all-handlers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* ***Se puede probar el upload de la imagen desde http://localhost:3000/upload en el navegador */

app.use(express.static('uploads'));
app.use(noCacheMiddleware);

app.get('/', nameAndAge);
app.use('/upload', uploadRouter);
app.use('/time', timeRouter);

app.listen(port, () => {
  console.log(`CORS-enabled web server listening at http://localhost:${port}`);
});
