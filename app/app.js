import express from "express";
import createError from "http-errors";
import logger from "morgan";
import usersRouter from "./routes/user.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(fileUpload());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
