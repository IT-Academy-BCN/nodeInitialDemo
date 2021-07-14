import { checkError } from "./errorHandler.js";

const authenticate = (req, res, next) => {
    if(req.session && req.session.user || req.session.payload.email_verified){
        return next();
    }

    return checkError(403, next);
}

export default authenticate;