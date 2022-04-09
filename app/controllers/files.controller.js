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
    image.mv('./uploads/' + getFormattedDatetime() + image.name);

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

const getFormattedDatetime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

    return formattedDate;
};

module.exports = {
    uploadFile
};