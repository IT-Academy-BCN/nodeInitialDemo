import usersRouter from "./routes/user.js";
import rankingRouter from "./routes/ranking.js";
import gamesRouter from "./routes/games.js";

app.use( '/players', usersRouter );
app.use( '/ranking', rankingRouter );
app.use( '/games', gamesRouter );

export default rutas;
