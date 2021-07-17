import axios from 'axios';
import dotenv from 'dotenv';
import checkError from '../helpers/errorMessages.js';

dotenv.config();
const remoteServer = process.env.REMOTE_SERVER;

const signupUser = async (req, res, next) => {
    const {username, password} = req.body;

    const resp = await axios.post(remoteServer + '/signup', {
        username: req.body.username,
        password: req.body.password
    });

    if(resp.data === null) return checkError(500, next);

    req.session.is = true;
    req.session.user = req.body.username;
    req.session.pass = req.body.password;
    res.locals.session = req.session;

    res.redirect('/chat');
};

export default signupUser;