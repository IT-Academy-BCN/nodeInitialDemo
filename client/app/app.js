import express from 'express';
import dotenv from 'dotenv';
import hbs from 'express-handlebars';
import session from 'express-session';
import router from './routes/routes.js';
import cors from 'cors';
import axios from 'axios';
import errorHandler from './middlewares/errorHandler.js';


// CONFIGURACION RUTAS LOCALES

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DEFINICION VARIABLES DE ENTORNO

dotenv.config();
const remoteServer = process.env.REMOTE_SERVER;

// INICIALIZACION DEL SERVIDOR EXPRESS

const app = express();

// CONFIGURANDO PLANTILLAS PARA LAS VISTAS CON HANDLEBARS

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// ##->> DEFINICION DE MIDDLEWARES <<-

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURACION SESION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// #->> END MIDDLEWARES <<-

// ##->> DEFINICION DE RUTAS << -

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// API
app.get('/saludos', async (req, res) => {
    const saludo = await axios.get('http://localhost:3000/hola');
    res.json({
        saludo: saludo.data.saludo
    });
});
app.use(router);

// GESTION DE ERRORES
app.use(errorHandler);

// #->> END DEFINICION RUTAS <<-

// INICIACION DE SERVER

const httpServer = app.listen(4000, () => {
    console.log("Server-Client listening on port 4000");
});