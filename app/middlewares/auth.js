import { checkError } from "./errorHandler.js";
import  jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined'){
        const token = header.split(" ")[1];
        
        jwt.verify(token, process.env.SECRET_TOKEN, (err, user)=> {
            if(err) return checkError(403, next);
        });
        return next();
    }

    checkError(403, next);
}

export default authenticate;