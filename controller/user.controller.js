function createUser(req, res){
    const user = {
        name: 'Mike', 
        age: '41',
        url: req.headers.host+req.originalUrl
    }

    res.json(user)
}


function postUser(req, res){
    var user = req.body
    res.json({
        user: user,
        date: new Date().toLocaleString('es-es')
    })
}

module.exports = {
    createUser : createUser,
    postUser: postUser
}