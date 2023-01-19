const express = require('express');

const userRouter = require('./routes/user.routes');

const app = express();

app.use('/user', userRouter);

const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}...`));
