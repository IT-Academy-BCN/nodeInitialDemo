import { Router } from "express";

const router = Router();

router.get('/', (req,res) => {
    var users = Object.values(req.context.models.users);
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return res.send({users,fullUrl});
});

router.get('/:userId', (req,res) => {
    var user = req.context.models.users[req.params.userId];
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return res.send({user,fullUrl});
});

export default router;
