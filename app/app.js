import express from 'express';
import playersRouter from './routes/players.js';
import { errorHandler } from './middlewares/errorHandler.js';
import './config/dbManager.js';

const app = express();

// DEFINICION DE MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/players', playersRouter);
app.use(errorHandler);

// INICIACION DE SERVER

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});