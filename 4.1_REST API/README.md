# SPRINT4_1: Node REST Server Instructions

-La aplicación usa el puerto local 3000. Todos los endpoints derivan de la base http://localhost:3000/. 

-Se adjunta un colección Postman con las peticiones hechas para testear los distintos endpoints. 
## Estructura global del Sprint 4.1:

    app.js -> Punto de entrada al programa. Se configuran los endpoints y se ejecuta el servidor express.

    /src -> Ficheros a ejecutar en la inicialización.
     |-- routes.js -> Definición de los endpoints

    /controllers 
      |-- user.js
      |-- upload.js
      |-- time.js
      |-- pokemon.js

    /middlewares
      |-- authe.js
      |-- imageFilter.js
      |-- Cache.js

      / -> Ficheros a utilizar en ejercicio del endpoint"/upload"
      |-- vps.png
      |-- vps2.pdf
    /routes -> Declaración de los endpoints
      |-- user.js
      |-- upload.js
      |-- time.js
      |-- pokemon.js

## Primero pasos
-Consultar el package.json para saber qué extensiones, módulos o librerías serán necesarios. En este caso la lista es la siguiente:
  *express
  *multer
  *cors
  *cross-fetch
  *path
## Instrucciones para ejecutar:

-Clonar el proyecto.

-Instalar las dependencias necesarias usando en el terminal la siguiente línea de comandos:

	  npm install

-Arrancar el servidor:

	  npm start     $–Si es en modo producción
	  npm run dev   $– Si es en modo desarrollo

## Peticiones Postman
-Como no existe la parte del cliente, todos los testings se harán con Postman.
-Consultar: 

    https://www.postman.com

-Se adjunta una coleción postman para probar todos los endpoints

      4.1_API REST.postman_collection.json

## NIVEL 1
  ### EJERCICIO 1

-Crear petición GET en Postman – http://localhost:3000/user

-Devuelve un json con los datos: nombre, edad y url.

  ### EJERCICIO 2

-Desde la petición POST de Postman hay que proporcionar la imagen que se desea subir en la pestaña Body, bajo la key 'imagen' de la request. 

-Para testear el mensaje de error, hay que proporcionar un archivo con una extensión que no corresponda a los formatos de imagen válidos (.jpg/.JPG, .png/.PNG, .gif/.GIF).

-Petición POST (Post/upload) 

  -En la pestaña ‘Body’> form-data daremos nombre de archivo bajo la Key ‘Imagen’ y seleccionaremos como type la opción ‘File’ porque no es un archivo de texto. 
  -A continuación, seleccionaremos la imagen que queramos subir y formalizaremos la petición mediante ‘SEND’.

  -Si funciona, retornará un mensaje de status 200; si no, devolverá un error tipo 400, 415 o 500.

  -Los archivos que se carguen se almacenarán en la carpeta /uploads. 
Para verlo correctamente, se tiene que añadir la extensión de archivo adecuada(.jpg, .jpeg, .png o .gif).

## NIVEL 2
  ### EJERCICIO 1
  
-Utilizando una petición POST se comprueba que después de haber creado el endpoint '/time' el servidor local devuelve un objeto JSON con la fecha y la hora.

-Para testar correctamente en Postman la ruta '/time' deben elegirse los siguiente parámetros:

    Authorization > Type > Basic Auth

  ### EJERCICIO 2
  
-Usando una petición POST se comprueba que si xl usuarix no introduce el nombre y el password correctos en el Login, el servidor le devuelve un error 401 indicándole que hay un error de autenticación.

-Cuando se comprueben las funcionalidades habrá que seguir:
    Autorización > Autorización básica

-Datos para Login: 
    Nom d'usuari: admin
    Contrasenya: 54321

** Si hay algún error en las credenciales se devolverá un mensaje de status de 401.

## NIVEL 3
  ### EJERCICIO 1

-Se llama mediante un GET a la API de Pokemon que recupera datos del pokemon introducido mediante su ID (nombre, altura y peso). 
