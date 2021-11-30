const time = (req, res) => {
    const name = req.body.name;
    if(!name){
        res.send('Error, No User');
        return;
    }

    let fecha = new Date();
    console.log('fecha: ', fecha);
    console.log('Usuario recibido'); 
    res.json({
        name,
        fecha: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`,
        hora: `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    });
}

module.exports = time