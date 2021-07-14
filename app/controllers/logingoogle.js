import dotenv from 'dotenv';
import verifyGoogleToken from '../middlewares/verifyGoogleToken.js';
import { checkError } from "../middlewares/errorHandler.js";

dotenv.config();

const loginGoogleUser = async (req, res, next) => {
    const payload = await verifyGoogleToken(req, next);

    if(payload === null) return checkError(500, next);

    const token = req.body.token;

    req.session.user = payload.email;
    req.session.picture = payload.picture;
    req.session.payload = payload;
    res.locals.payload = payload;

    res.cookie('session-token', token);
    res.send(true);
}

export default loginGoogleUser;