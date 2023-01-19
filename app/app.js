require('dotenv').config();
const express = require('express');

const { connectDB } = require('./db/db.connect');
const gameRouter = require('./routes/games.routes');
const userRouter = require('./routes/users.routes');
const rankingRouter = require('./routes/ranking.routes');
const pageNotFound = require('./middlewares/not-found');

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/games', gameRouter);
app.use('/api/ranking', rankingRouter);

app.use(pageNotFound);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`listening on port ${PORT}...`));
  } catch (err) {
    console.log(err.message);
  }
};

start();
