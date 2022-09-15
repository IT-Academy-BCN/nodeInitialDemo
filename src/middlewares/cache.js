"use strict";

// Configuració del middleware per fer el control del caché (mètodes "POST")
  
let cacheMiddleware = (req,res,next)=>{
  if (req.method == 'POST') {
    res.set("Cache-control", "No-cache");
} else {
    res.set("Cache-control", "No-store");
}
next();
}
    
module.exports = cacheMiddleware;