import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
    const accesToken = req.header('authorization') || req.query.accesstoken;
    if (!accesToken) {
        res.json({ msg: 'Access denied' });
    };
    jwt.verify(accesToken, process.env.SECRETRPRIVATEKEY, (err, user) => {
        if (err) {
            res.json({
                msg: 'Access denied, token expired or incorrect.'
            })
        } else {
            next();
        }
    })
};