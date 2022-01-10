const time = (req, res) => {
    const name = req.body.name;
    if(!name){
        res.status(400).json({ msg: 'Error, No User' });
        return;
    }

    let fecha = new Date();
    console.log('fecha: ', fecha);
    console.log('Usuario recibido'); 
    res.status(200).json({
        name,
        fecha: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`,
        hora: `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    });
}

module.exports = time