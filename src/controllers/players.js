export const playersGet = (req, res) => {
    res.json({
        msg: 'Servidor en marcha'
    });
};

export const playersPost = (req, res) => { 
    res.json({
        msg: 'funciona Post'
    });
};

export const playersPut = (req, res) => {
    res.json({
        msg: 'Funciona Put'
    });
};

export const playersDelete = (req, res) => {
    res.json({
        msg: 'Funciona Delete'
    });
};