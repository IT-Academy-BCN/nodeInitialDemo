import { Router } from "express";

const router = Router();

router.get('/:image', (req,res) => {
    if(isImage(req.params.image)){
        return res.send("Fitxer " + req.params.image + " pujat correctament!");
    }else{
        return res.send("Error: No es poden pujar aquest tipus de fitxers, pots pujar fitxers amb extensió png, jpg o gif :)");
    }
});

function isImage(file) {
    var extension = file.substr((file.lastIndexOf('.') +1));
    if(!/(png|jpg|gif)$/ig.test(extension)){
        return false;
    }else{ 
        return true;
    }
}

export default router;