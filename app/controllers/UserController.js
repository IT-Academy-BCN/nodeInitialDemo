exports.userController = (req, res) => {

    res.status(200).json(
        {
            name:"Alejandro",
            lastname:"Zuriguel",
            OriginalUrl: req.originalUrl,
        }
        
    );

}

exports.timeController = (req, res, next) => { 


    
     if(!req.body.lastname && !req.body.name) res.status(400).json({message:"No data has been sent"});


    res.status(200).json(
        {
            name:req.body.name,
            lastname:req.body.lastname,
            date: new Date()
        }
        
    );

}
