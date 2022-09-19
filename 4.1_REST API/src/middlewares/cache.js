/*'use strict';

// Configuració del Middleware per fer el control del caché (mètodes "POST", CORS)
  
let cacheMiddleware = (req,res,next)=> {
  if (req.method == 'POST') {
    res.set("Cache-control", "No-cache");
} else {
    res.set("Cache-control", "No-store");
}
next();
}
    
module.exports = cacheMiddleware;

/*Nivel 2
Afegeix un middleware a l'endpoint anterior 
que retorni un HTTP Status 401 - Unauthorized 
si la capçalera de la petició no conté autenticació bàsica 
(usuari/ària i contrasenya). */