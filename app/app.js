const express = require('express');
const cors = require('cors');

const timeRouter = require('./routes/time.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/time', timeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
