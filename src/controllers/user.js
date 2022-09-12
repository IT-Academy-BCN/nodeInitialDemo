//Creació Endpoint-/user

//http://localhost:3000/api/user

const getUser = (req, res) => {

    try {
        res.status(200).json({
                "name": "Samsa",
                "age": "24",
                "url": req.protocol + "://" + req.headers.host + req.url
               }); 

    } catch (err) {
        console.log(err);
        }
    }

module.exports = getUser;
