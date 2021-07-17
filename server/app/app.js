import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import hbs from 'express-handlebars';
import session from 'express-session';
import router from './routes/routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import './config/dbManager.js';
import './models/users.js';

// CONFIGURACION RUTAS LOCALES

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DEFINICION VARIABLES DE ENTORNO

dotenv.config();

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

// GESTION DE ERRORES
app.use(errorHandler);

// #->> END MIDDLEWARES <<-

// ##->> DEFINICION DE RUTAS << -

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// API
app.get('/hola', (req, res) => {
	console.log('hola route');
	res.json({
		saludo:'hola'
	});
});
app.use(router);

// #->> END DEFINICION RUTAS <<-

// INICIACION DE SERVER

const httpServer = app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// INICIACION SOCKETS

const io = new Server(httpServer, {
    cors: {
	    origins: "*"
    }
});

io.on('connection', (socket) => {
    console.log('## => New connection: ', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message-server', data);
	console.log("msg: ", data);	    
    });

    socket.on('chat:typing', (username) => {
        socket.broadcast.emit('chat:typing-server', username);
    });
});
