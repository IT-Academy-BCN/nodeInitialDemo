import usersRouter from "./routes/user.js";
import rankingRouter from "./routes/ranking.js";
import gamesRouter from "./routes/games.js";
import express from "express";

const routers = express.Router();


routers.use( "/users", usersRouter );
routers.use( "/ranking", rankingRouter );
routers.use( "/games", gamesRouter );

export default routers;


