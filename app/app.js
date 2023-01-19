require('dotenv').config();
const express = require('express');

const connectDB = require('./db/db.connect');
const userRouter = require('./routes/user.routes');
const gameRouter = require('./routes/game.routes');
const rankingRouter = require('./routes/ranking.routes');
const pageNotFound = require('./middleware/not-found.middleware');

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/games', gameRouter);
app.use('/api/ranking', rankingRouter);

app.use(pageNotFound);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB;
    console.log('connection with DB successful');
    app.listen(PORT, console.log(`listening on port ${PORT}...`));
  } catch (err) {
    console.log(err.message);
  }
};
startServer();
