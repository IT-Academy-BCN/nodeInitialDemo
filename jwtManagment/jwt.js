const jwt = require('jsonwebtoken')


function checkAdmin(req, res, next){
    const authB64 = req.headers['authorization']
    const auth = authB64 && authB64.split(' ')[1]
    if(auth == null) return res.status(401).send({message:'admin credentials needed'})
    const buff = Buffer.from(auth,'base64')
    const str = buff.toString('utf-8')
    if(str==='admin:12345'){
      const token = jwt.sign('admin','shhh')
      return res.status(200).send({token})
    }
    return res.status(403).send({message:'wrong credentials'})
}
  



function checkJWT(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token==null) return res.status(401).send({message:'token is missing'})

  jwt.verify(token, 'shhh', (err, user) =>{
    console.log(err)
    if(err) return res.status(403).send({message: 'invalid token'})
    if(user === 'admin') next()
  })
}

module.exports = {
  checkAdmin,
  checkJWT
}


