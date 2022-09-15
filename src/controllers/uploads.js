"use strict";

// Carregar un sol arxiu
const uploadPost = ((req, res) => {
  try {
    if (!req.files) {
      res.status(400).json({ message: "Petición incorrecta. // Petició incorrecta. // Bad request" });// 
     
    } else {
      // Es fa servir el nom del camp d'entrada (és a dir, "avatar") per a recuperar l'arxiu carregat
      let avatar = req.files.image;

      // S'utilitza el mètode mv() per a posar l'arxiu al directori de càrrega (és a dir, "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //Enviar resposta d'arxiu carregat correctament
      res.status(200).json({message: "¡Enhorabuena! Archivo cargado correctamente. // Enhorabona! L'arxiu s'ha carregat correctament. // Congratulations! File uploaded successfully."
        })
  
    }
  s
} catch (error) {
    res.status(500).json({ message: "Error interno del servidor. // Error intern del servidor. // Internal Server Error" });
  }
})

module.exports = uploadPost;