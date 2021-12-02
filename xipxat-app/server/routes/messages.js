const router = require('express').Router()
const Message = require('../database/tableMessages.js')
const { check, validationResult } = require('express-validator');

router.get('/:userID', async (req, res) => {
    const messages = await Message.findAll({where: {userID: req.params.userID} });
    res.json(messages);
});

router.post('/', [check('userID', "userID is mandatory!").not().isEmpty()], async (req, res) => {

    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(422).json( {errores: errors.array() })
    };

    try {
    const message = await Message.create(req.body)
    res.json(message);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;    