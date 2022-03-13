import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRETRPRIVATEKEY, { expiresIn: '4h' });
};