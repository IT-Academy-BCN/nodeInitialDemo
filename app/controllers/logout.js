
const logout = (req, res, next) => {
    req.session.destroy((e) => {
        console.log("SESION DESCONECTED");
    });

    res.redirect('/');
    res.end();
    next();
}

export default logout;