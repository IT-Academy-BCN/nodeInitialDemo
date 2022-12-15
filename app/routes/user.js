import express from "express";

const router = express.Router();

/* GET enviant missatge sol·licitat per l'exercici. */
router.get('/', (req, res) =>
    res.json(
        {
            nom: 'Iván Legrán',
            edat: 37,
            url: 'http://localhost:3000/user'
        }
    ));

export default router;
