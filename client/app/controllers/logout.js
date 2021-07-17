
const logout = (req, res, next) => {
    req.session.destroy((e) => {
        console.log("SESSION DESCONECTED");

    });

    res.clearCookie('session-token');
    res.redirect('/');
}

export default logout;