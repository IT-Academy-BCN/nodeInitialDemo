
const router = require('express').Router();
const User = require('../database/tableUsers.js');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');


router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', [
    check('username', "username is mandatory!").not().isEmpty(),
    check('name', "name is mandatory!").not().isEmpty(),
    check('password', "password is mandatory!").not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(422).json( {errores: errors.array() })
    };

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body);
    res.json(user)
});

router.put('/:id', async (req, res) => {
    await User.update(req.body, {
        where: {id: req.params.id}
    });
    res.send('✔️  user updated!')
});

router.delete('/:id', async (req, res) => {
    await User.destroy({
        where: {id: req.params.id}
    });
    res.send('✔️  user deleted!')
});

router.delete('/', async (req, res) => {
    await User.destroy({ where:{} });
    res.send('✔️  all users deleted!')
});


module.exports = router;