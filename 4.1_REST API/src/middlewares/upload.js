const res = require('express/lib/response');
const multer = require('multer')
const path = require('path')

let fileFilter = (req, res = response, cb) => {
    if (req.files){
    const fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

    if (fileTypes.some(fileType => fileType === req.files.image.mimetype)) return cb(null, true);

    return res.status(400).json({message: "Solo válidos ficheros con las siguientes extensiones: .jpeg/.jpg, .png i .gif // Només vàlids fitxers amb les següents extensions: .jpeg/.jpg, .png i .gif // Valid files only with the following extensions .jpeg/.jpg, .png and .gif"});
 
    } else {
        res.status(400).json({ message: "No hay ningún archivo. // No hi ha cap arxiu. // No file"});
 }
}

module.exports = fileFilter;