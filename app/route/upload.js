import { Router } from "express";
import multer from 'multer';

const router = Router();

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
})

var fileFilter = (req,file,cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg') || (file.mimetype).includes('gif')){
        cb(null, true);
    } else{
        cb('Error: images only!');

    }
}

const upload = multer({storage: storage, fileFilter: fileFilter,}).single("file");

router.post('/', (req,res) => {
    
    upload(req,res,(err) => {
        if(err){
            return res.status(400).json({
                success: false,
                message: "Something went wrong, the image extension is not correct!",
            })
        }
        return res.json({
            success: true,
            message: req.file,
        });
    });
});

/*function isImage(file) {
    var extension = file.substr((file.lastIndexOf('.') +1));
    if(!/(png|jpg|gif|jpeg)$/ig.test(extension)){
        return false;
    }else{ 
        return true;
    }
}*/

export default router;