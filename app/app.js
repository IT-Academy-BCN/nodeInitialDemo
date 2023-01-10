import express from "express";
import logger from "morgan";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import { dbConnectMysql } from "./config/mysql.js";
import { error404 } from "./routes/error404.js";
import rutas from "./routes/enrutador.js";

dotenv.config();

const app = express();

app.use( fileUpload() );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use(rutas)

app.use( error404 );



const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Server is running on http://localhost:${ PORT }` ) );


dbConnectMysql();
