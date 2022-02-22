module.exports = (req, res, next) => {

    const auth = ( req.header.user, req.header.password );
    if (!auth) {
        res.status(401).send({ missatge: "Unauthorized"})
    }
    next(); 

    


}
