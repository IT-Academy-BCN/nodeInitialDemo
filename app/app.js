import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import router from './routes/routes.js';
import './config/dbManager.js';
import './models/users.js';


// CONFIGURACION VARIABLES DE RUTAS PARA ES6

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// DEFINICION DE MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// DEFINICION DE RUTAS

app.use('/', router);

// INICIACION DE SERVER

const httpServer = app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// INICIACION SOCKETS

const io = new Server(httpServer);
io.on('connection', (socket) => {
    console.log('New connection', socket.id);
});