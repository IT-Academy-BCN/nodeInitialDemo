//
//TODO DEPENDENCIES
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// we call the file of the routes
const routes = require("./app/routes/routes");
const uploadRoutes = require("./app/routes/uploadRoutes");
// const routes = require("./app/routes/routes");

//TODO MIDDLEWARE
// for the POST to function
app.use(express.json());

//TODO ROUTES
// we execute the endepoints
app.use("/", routes);
app.use("/user", routes);
app.use("/upload", uploadRoutes);

//we execute the server
app.listen(PORT, () => {
  console.log(`Server in job on ${PORT}`)
});