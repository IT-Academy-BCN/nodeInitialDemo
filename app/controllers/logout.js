
const logout = (req, res, next) => {
    req.session.destroy((e) => {
        console.log("SESSION DESCONECTED");
    });

    if(res.locals.payload) return res.clearCookie('session-token').redirect('/');

    res.redirect('/');
    res.end();
    next();
}

export default logout;