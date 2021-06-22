import { Router } from "express";

const router = Router();

router.post('/:image', (req,res) => {
    if(isImage(req.params.image)){
        return res.json({
            success: true,
            message: 'image verified and uploaded correctly!',
        })
    }else{
        return res.json({
            success: false,
            message: 'image is not correct, try again'
        })
    }
});

function isImage(file) {
    var extension = file.substr((file.lastIndexOf('.')+1));
    if(!/(png|jpg|gif)$/ig.test(extension)){
        return false;
    }else{
        return true;
    }
}

export default router;