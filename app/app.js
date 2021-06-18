import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import models from './models';
import routes from './route';

const app = express();

app.use(cors());

app.use((req,res,next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/upload', routes.upload);

app.listen(process.env.PORT, () =>
    console.log(`Servidor obert desde el port ${process.env.PORT}!`),
);

