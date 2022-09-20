//Creació Endpoint-/user

//http://localhost:3000/user

const getUser = (req, res) => {

    try {
        res.status(200).json({
            "name": "Samsa",
            "age": "24",
            "url": req.protocol + "://" + req.get('Host') + req.originalUrl
            }); 

    } catch (err) {
        res.status(404).send({
            status:"error", 
            message: "Esta página no existe. // Aquesta pàgina no existeix. // This page doesn't exist"
        });
    }
}

module.exports = getUser;
