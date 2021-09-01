import multer from "multer";

const maxSize = 1 * 1000 * 1000;

// Defining storage of files 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../../public/uploads/`);
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
  
//Filterting by mimetypes
const fileFilter = (req, file, cb) => {

    const mimes = [
        "image/png",
        "image/jpg", 
        "image/jpeg", 
        "image/gif" 
    ];

    if(mimes.some( mime => mime === file.mimetype )) return cb(null, true);

    return cb(new Error('Only .png, .jpg/jpeg and .gif format allowed!'), false);
};


export {storage, fileFilter, maxSize};