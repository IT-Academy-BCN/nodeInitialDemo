"use strict";
import express from "express";
import logger from "morgan";
import path from "path";

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// Importing routes
import {indexRouter} from  "./routes/index.js";

// middlewares
app.use(express.static(path.join(__dirname, "./public")));
app.use(logger("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use("/api/", indexRouter);

// starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});