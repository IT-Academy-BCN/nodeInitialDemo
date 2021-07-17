import axios from 'axios';
import dotenv from 'dotenv';
import checkError from '../helpers/errorMessages.js';

dotenv.config();
const remoteServer = process.env.REMOTE_SERVER;

const loginUser = async (req, res, next) => {
    const {username, password} = req.body;

    const resp = await axios.post(remoteServer + '/login', {
        username: username,
        password: password
    });

    if(resp.data.code === 200){
        req.session.is = true;
        req.session.user = username;
        req.session.pass = password;
        res.locals.session = req.session;
        res.redirect('/chat');
    }else{
        return checkError(resp.data.code, resp.data.message);
    }
}

export default loginUser;