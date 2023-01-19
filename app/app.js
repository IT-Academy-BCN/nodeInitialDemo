const express = require('express');

const userRouter = require('./routes/user.routes');
const pageNotFound = require('./middlewares/not-found.middleware');

const app = express();

app.use('/user', userRouter);

app.use(pageNotFound);

const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}...`));
