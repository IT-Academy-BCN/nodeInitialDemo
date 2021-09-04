import multer from "multer";
import {storage, fileFilter, maxSize} from "./filtersMulter"
  

// Middleware
const upload = (req, res, next) => { return multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: fileFilter,
}).single("file")(req, res, function (err) {

    // Handlering errors
    // FILE SIZE ERROR
    if (err instanceof multer.MulterError) return res.status(500).json("Max file size 2MB allowed!");

    // INVALID FILE TYPE, message will return from fileFilter callback
    if (err) return res.status(500).json(err.message);

    // FILE NOT SELECTED
    if (!req.file) return res.status(500).json("File is required!");

    // SUCCESS
    next();
  });
}


export default upload;