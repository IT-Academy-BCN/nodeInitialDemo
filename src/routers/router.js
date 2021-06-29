const path = require('path');
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const { runInNewContext } = require('vm');

const storage = multer.diskStorage({
    //como colocar el nombre del archivo
    destination: path.join(__dirname, '../public/uploads/'),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

router.get('/', (req, res) =>{
    res.render('index');
});

const upload = (multer({
    storage, // es lo mismo que poner storage: storage
    dest: path.join(__dirname, '../public/uploads/'),
    //limits: {fileSize: 100000},
    fileFilter: (req, file, cb) => {
        const filetypes = /png|jpg|gif/;
        const mimetype = filetypes.test(file.mimetype); //comprobamos si el archivo coincide con las extensiones de arriba
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: file needs to be an image with the extension jpg, png, or gif");
    }
}).single('image'));

//Upload file
 //para recibir lo que el formulario esta enviado a traves del metodo post
 router.post('/upload', upload, (req, res) => {
     let picture = req.file;
     console.log(req.file);
     if(req.file === null){
         res.status(404).send('something went wrong');
     }
     res.send({
         data:{
             name: picture.originalname,
             mimetype: picture.mimetype,
             size: picture.size
         }
     });
 });

function sendResponse(req, res, data){ //anadimos el objeto req para leerlo en el valor del parametro url
    if(!data){
        res.json({
            success: false,
            message: 'Not found'
        })
    }else{
        res.json({
            success: true,
            data: data,
            url: req.protocol + '://' + req.get('host') + req.url 
        })
    }
}

router.get('/user', (req, res) =>{
    const data = require('../user.json');    
    sendResponse( req, res, data);
    });

    module.exports = router;