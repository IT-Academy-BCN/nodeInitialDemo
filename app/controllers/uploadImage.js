const uploadImage = (req,res) =>{
    // DO SOMETHING
    const body = {
        message: "File uploaded successfully!",
        file: req.file
    }
    //console.log("File response", req.file);
    res.status(201).json(body);
}

export default uploadImage;