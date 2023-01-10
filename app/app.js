import express from "express";
import logger from "morgan";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import conexion from "./config/mongoConfig.js";
import { error404 } from "./routes/error.404.js";
import usersRouter from "./routes/user.js";
import rankingRouter from "./routes/ranking.js";
import gamesRouter from "./routes/games.js";



dotenv.config();

conexion();

const app = express();
app.use( fileUpload() );

app.use( '/players', usersRouter );
app.use( '/ranking', rankingRouter );
app.use( '/games', gamesRouter );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( error404 );



const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Server is running on http://localhost:${ PORT }` ) );


