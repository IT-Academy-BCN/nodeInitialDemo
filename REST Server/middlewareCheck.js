module.exports = (req, res, next) => {
    
    if (req.headers.authorization) {
        next()    
    } else {
        res.status(401).send({ missatge: "Unauthorized" })
    }

}
