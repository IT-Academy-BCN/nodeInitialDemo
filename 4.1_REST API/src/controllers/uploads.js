'use strict';
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs  = require('fs');

const storageStrategy = multer.memoryStorage();
const upload = multer({storage:storageStrategy});

const app = express();

// Carregar un sol arxiu
const uploadImage = ((req, res) => {
  try {
    if (!req.files) {
      res.status(406).json({ message: "Petición incorrecta. Formato de archivp no aceptado. // Petició incorrecta. Format d'arxiu no acceptat. // Bad request. File Format Not Accepted." });// 
     
    } else {
      // Es fa servir el nom del camp d'entrada (és a dir, "imagen") per a recuperar l'arxiu carregat
      let imagen = req.files.image;

      // S'utilitza el mètode mv() per a posar l'arxiu al directori de càrrega (és a dir, "uploads")
      imagen.mv("./uploads/" + imagen.name);

      //Enviar resposta d'arxiu carregat correctament
      res.status(200).json({message: "¡Enhorabuena! Archivo cargado correctamente. // Enhorabona! L'arxiu s'ha carregat correctament. // Congratulations! File uploaded successfully."
        })
  
    }
} catch (error) {
    res.status(500).json({ message: "Error interno del servidor. // Error intern del servidor. // Internal Server Error" });
  }
})

module.exports = uploadImage;

app.listen(PORT, () => {
  console.log(`El servidor funciona en el puerto ${PORT}. // El servidor funciona al port ${PORT}. // Server works on port ${PORT}.`);
});
