# Entrega 4.1: Node REST Server Instructions

La aplicación usa el puerto local 3000. Todos los endpoints derivan de la base `http://localhost:3000/`. Se adjunta un archivo los las peticiones hechas en postman para testear los distintos endpoints [aquí](https://github.com/duke33/nodeInitialDemo/blob/main/postman_collection.json).

## Nivel 1

### Ejercicio 1

`http://localhost:3000/user` o en postman bajo el nombre `JSON with username`

### Ejercicio 2

Para subir, desde las peticiones de postman, bajo el nombre `Upload image`, hay que proporcionar la imagen que se desea subir en la pestaña `Body`, bajo la `key some_pic` de la request. Las imágenes subidas al servidor se almacenan en la carpeta `upload`. Para testear el mensaje de error, proporcionar un archivo con una extensión que no corresponda a imagen.

## Nivel 2 y Nivel 3

### Ejercicio 1

Desde postman, la petición con el nombre `To /time as authorized user`. En el `body` de la misma se encuentra la información a enviar en formato JSON. Desde la consola se va a loguear el valor del header `Cache-control`, la contraseña y nombre de usuarios necesarios para loguearse se encuentran bajo la pestaña `Authorization` de Postman. Por otro lado, para ingresar sin autorización y poder ver el mensaje de error, se puede utilizar la petición llamada `To /time as UN-authorized`
