const cors = require("cors");
const express = require("express");
const nocache = require("nocache");
const app = express();
const fileRoutes = require("./routes/file");
const userRoute = require('./routes/user')
const auth = require('./middleware/auth')

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(auth)
app.use(nocache());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/', userRoute)
app.use('/', fileRoutes)

// initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
