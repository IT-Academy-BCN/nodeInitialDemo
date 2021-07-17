import axios from 'axios';
import dotenv from 'dotenv';
import checkError from '../helpers/errorMessages.js';

dotenv.config();
const remoteServer = process.env.REMOTE_SERVER;

const loginGoogleUser = async (req, res, next) => {
    
    const resp = await axios.post(remoteServer + '/glogin', {
        token: req.body.token,
    });

    if(resp.data === null) return checkError(500, next);

    req.session.user = resp.data.email;
    req.session.picture = resp.data.picture;
    req.session.payload = resp.data;
    res.locals.payload = resp.data;

    res.redirect('/chat');
}

export default loginGoogleUser;