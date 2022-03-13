# 📌🧑🏻‍💻 Entrega 4.2: Node REST + DB + JWT

## Estructura del proyecto

## Dependencias


## Variables de entorno

Para configurar las variables de entorno, tendrás que crear un archivo .env y rellenar los elementos que se encuentran el el archivo .example.env

## Sequelize (Nivel 1 ⭐️)

La parte de sequelize no la tengo acabada del todo, me falta acabar los controladores y pasarselos a las rutas.

## Mongoose (Nivel 2 ⭐️⭐️)

La parte de mongoose está finalizada correctamente, se pueden comprobar todas las rutas importando en postman el archivo: 
```
Dice game.postman_collection.json
```

## Autenticación (Nivel 3 ⭐️⭐️⭐️)

Para realizar la autenticación introducir en el endpoint /login los siguientes parámetros:
```
{
    "username": "admin",
    "password": "12345"
}
```
Para validar el token en el resto de endpoints, tenemos dos maneras de hacerlo:
1º - Añadir al header la KEY 'Authorization' y como VALUE le pasamos el token que hayamos generado en el endpoint login.
2º - A través de la URL añadimos después del endpoint ?Authorization= seguido del token que hayamos generado.

## Endpoints
Los endpoint que he utilizado para realizar este juego de dados son los siguientes:

### GET

Devuelve un listado de todos los jugadores del sistema con su porcentaje medio de éxitos:
```
/players
```

Devuelve un listado de jugadas realizadas por un jugador:
```
/players/:id/games
```

Devuelve el porcentaje médio de éxito del conjunto de todos los jugadores:
```
/players/ranking
```

Devuelve el jugador con mejor porcentaje de éxito:
```
/players/ranking/winner
```

Devuelve el jugador con mejor porcentaje de éxito:
```
/players/ranking/loser
```

### POST

Permite acceder a un administrador con usuario y contraseña y devuelve un token haciendo obligatoria la autenticación por JWT en el resto de endpoints:
```
/login
```

Crea un jugador (Hay que pasar en el body el argumento "name" añadiendo como valor el nombre que le queramos dar al jugador que vallamos a crear, si no le damos ningún valor, el nombre será "ANONYMOUS"):
```
/players
```

Un jugador específico realiza una tirada:
```
/players/:id/games
```

### PUT

Modificamos el nombre del jugador, hay que pasar en el body el parametro "name":
```
/players/:id
```

### DELETE

Borrar las jugadas del jugador seleccionado:
```
/players/:id/games
```