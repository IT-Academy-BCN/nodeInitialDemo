const express = require('express');
const app = express();
const routerFiles = require("./routes/upload");
const routerUsers = require("./routes/users");

const cors = require('./middleware/cors');

app.get('/', (req, res) => {res.json({statusAPI: "API is running"})});
app.use(express.json());
app.use(routerFiles)
app.use(cors.cacheController,routerUsers)



app.listen(3000, () => {console.log('LETS GOOO API!');});