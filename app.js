//
//TODO DEPENDENCIES
const express = require("express");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

// we call the file of the routes
const routes = require("./app/routes/routes");
const uploadRoutes = require("./app/routes/uploadRoutes");
const userDate = require("./app/routes/userDate");
// const routes = require("./app/routes/routes");
const checkUsers = require("./app/middleware/checkUser");

//TODO MIDDLEWARE
// for the POST to function
app.use(express.json());
app.use(cors());

//TODO ROUTES
// we execute the endepoints
app.use("/", routes);
app.use("/user", routes);
app.use("/upload", uploadRoutes);
app.use('/userDate', userDate);
app.use("/auth", checkUsers);

//we execute the server
app.listen(PORT, () => {
  console.log(`Server in job on ${PORT}`)
});