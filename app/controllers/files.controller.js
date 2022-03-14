const uploadFile =  (req, res) => {


    if (!req.files?.image) {
        res.status(400).send({
            status: false, 
            message: 'No file uploaded. Expected "image" file field and being non empty'
        });
        return
    }

    if (!req.files.image.mimetype.includes('image')) {
        res.status(400).send({
            status: false,
            message: 'File mimetype is not an image'
        });
        return
    }

    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
    const image = req.files.image;

    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    image.mv('./uploads/' + image.name);

    //send response
    res.send({
        status: true,
        message: 'File is uploaded',
        data: {
            name: image.name,
            mimetype: image.mimetype,
            size: image.size
        }
    });
};


module.exports = {
    uploadFile
};