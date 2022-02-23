module.exports = (req, res, next) => {

    const auth = req.headers.auth;
    console.log(auth)
    if (!auth) {
        res.status(401).send({ missatge: "Unauthorized" })
    }
    next(); 

}
