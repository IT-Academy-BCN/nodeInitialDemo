const basicAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        res.send(401, {
            status: false,
            message: 'No authorization header found'
        });
    }

    const [user, password] = auth.split(':');

    if (!user || !password) {
    res.send(401, {
            status: false,
            message: 'Authorization header has not the correct format <username>:<password>'
        });
    }

    if (user !== 'admin' || password !== 'admin') {
        res.send(401, {
            status: false,
            message: 'Invalid credentials'
        });
    }

    next();
}

module.exports = {
    basicAuth
};