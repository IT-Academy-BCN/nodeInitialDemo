const res = require('express/lib/response');
const multer = require('multer')
const path = require('path')

let fileFilter = (req, res = response, cb) => {
    if (req.files){
    const fileTypes = ['image/png', 'image/PNG', 'image/jpg', 'image/JPG', 'image/jpeg','image/JPEG', 'image/gif', 'image/GIF'];

    if (fileTypes.some(fileType => fileType === req.files.image.mimetype)) return cb(null, true);

    return res.status(400).json({message: "Solo son válidos los ficheros con las siguientes extensiones: .jpg, .jpeg, .png y/o .gif // Només són vàlids els fitxers amb les següents extensions: .jpg,.jpeg, .png i/o .gif // Valid files only with the following extensions: .jpg, .jpeg, .png and/or .gif"});
 
    } else {
        res.status(400).json({ message: "No hay ningún archivo. // No hi ha cap arxiu. // No file"});
 }
}

module.exports = fileFilter;