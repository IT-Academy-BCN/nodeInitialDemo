# Juego de dados: suma 7

Backend con API para jugar a juego suma 7 lanzando dos dados.

## Background

Proyecto correspondiente a sprint del bootcamp de NodeJS de la IT Academy.

## Usage

Para usarlo, es necesario realizar consultas a los endpoints descritos en la sección API para realizar la acción deseada a través de los verbos HTML: GET, POST, PUT, DELETE.

Se levanta el servidor Express, por defecto en el puerto 3000, para la exposición de la API, usando el ORM Sequelize junto a MariaDB para la persistencia de datos.

## API/Component

Descripción de los endpoints para los modelos **_Players y Games_**.

### Players

### Endpoint: /players

- **GET** - Devuelve lista de los players de la BBDD que tengan games asociados y muestra la media de victorias ( _función showPlayers())_ ):

  - Recibe:
    - Parametros:
  - Devuelve: JSON

    - name = String \- Nombre del usuario.
    - media = Number \- Id del player registrado.

    **Ejemplo:**

    ```JSON
    JSON:
    [
        {
            "name": "player1",
            "media": 4.5455
        },
        {
            "name": "anonimo1637883321299",
            "media": 10
        }
    ]
    ```

- **POST** - Crea un nuevo player ( _funcion addPlayer()_ ):

  - Recibe: x-www-form-urlencoded
  - Parametros:
    - playerName = String \- Requerido \- Nombre del player, si no se especifica por defecto se usa 'anonimo' + timeStamp().
  - Devuelve: JSON

    - action = String \- Acción ejecutada (_Player Created_).
    - playerId = Number \- Id del player registrado.
    - playerName = String \- Nombre del player registrado.

    **Ejemplo:**

    ```JSON
    JSON:
    {
        "action": "Player Created",
        "playerId": 3,
        "playerName": "anonimo1637890249639"
    }
    ```

- **PUT** \- Actualiza el nombre del player que corresponde con el id facilitado en los parametros ( _función changeNamePlayer()_ ):

  - Recibe: x-www-form-urlencoded
  - Parametros:
    - newPlayerName = String \- Requerido \- Nuevo nombre del player.
    - playerId = Number \- Requerido \- Id único de identificación del player.
  - Devuelve: JSON

    - action = String \-

    **Ejemplo:**

    ```JSON
    JSON:
    {
        "action": "Player Updated"
    }
    ```

### Games

### Endpoint: /players/:id/games

**GET** - Devuelve listado de los games del player que corresponde con el _id_ ( _función getPlayerGames()_ ):

- Recibe:
- Parametros:
  - id = Number \- Requerido
- Devuelve: JSON

  - id = Number \- id del game.
  - palyerId = Number \- id del player.
  - dice1 = Number \- Numero resultado del dado 1.
  - dice2 = Number \- Numero resultado del dado 2.
  - won = Number \- Valores 1 o 0 si ha sumado 7 o no respectivamente.
  - createdAt = String \- Fecha \- Fecha en la que se ha creado el juego.
  - updatedAt = String \- Fecha \- Fecha en la que se ha modifcado el juego.

  **Ejemplo:**

  ```JSON
  JSON:
  [
        {
            "id": 23,
            "playerId": 2,
            "dice1": 1,
            "dice2": 5,
            "won": 0,
            "createdAt": "2021-11-25T23:43:26.000Z",
            "updatedAt": "2021-11-25T23:43:26.000Z"
        },
        {
            "id": 27,
            "playerId": 2,
            "dice1": 2,
            "dice2": 1,
            "won": 0,
            "createdAt": "2021-11-25T23:43:30.000Z",
            "updatedAt": "2021-11-25T23:43:30.000Z"
        },
        {
            "id": 32,
            "playerId": 2,
            "dice1": 6,
            "dice2": 1,
            "won": 1,
            "createdAt": "2021-11-25T23:43:33.000Z",
            "updatedAt": "2021-11-25T23:43:33.000Z"
        }
    ]
  ```

- **POST** - Crea un nuevo juego y devuelve el resultado del juego (_función playGame_):

  - Recibe:
    - Parametros:
      - id = Number \- Requerido
  - Devuelve: JSON

    - action = String \- Acción realizada (Nueva tirada de dados).
    - palyerId = Number \- id del player.
    - dice1 = Number \- Numero resultado del dado 1.
    - dice2 = Number \- Numero resultado del dado 2.
    - gameResult = Number \- Suma de los dados.
    - won = Number \- Valores 1 o 0 si ha sumado 7 o no respectivamente.

    **Ejemplo:**

    ```JSON
    JSON:
    {
        "action": "Nueva tirada de dados",
        "playerId": "2",
        "dice1": 4,
        "dice2": 2,
        "gameResult": 6,
        "won": 0
    }
    ```

- **DELETE** \- Elimina los games del player especificado ( _función deletePlayerGames()_ ):

  - Recibe:
  - Parametros:
    - id = Number \- Requerido
  - Devuelve: JSON

    - action = String \- Acción realizada (All games deleted).

    **Ejemplo:**

    ```JSON
    JSON:
    {
        "action": "All games deleted"
    }
    ```

### Endpoint: /players/ranking

- **GET** - Devuelve la media de los games de todos los players ( _función averagePlayers()_ ):

  - Recibe:
    - Parametros:
      - Ninguno
  - Devuelve: JSON

    - media = Numbre \- Media de aciertos de todos los players.

    **Ejemplo:**

    ```JSON
    JSON:
    [
        {
            "media": 4.5455
        }
    ]
    ```

### Endpoint: /players/ranking/winner

- **GET** - Devuelve el player con mejor media ( _función getWinner()_ ):

  - Recibe:
    - Parametros:
      - Ninguno
  - Devuelve: JSON

    - winner = String \- Nombre del player con mejor media.

    **Ejemplo:**

    ```JSON
    JSON:
    [
        {
            "winner": "player1"
        }
    ]
    ```

### Endpoint: /players/ranking/loser

- **GET** - Devuelve el player con peor media ( _función getLoser()_ ):

  - Recibe:
    - Parametros:
      - Ninguno
  - Devuelve: JSON

    - loser = String \- Nombre del player con peor media.

    **Ejemplo:**

    ```JSON
    JSON:
    [
        {
            "loser": "player1"
        }
    ]
    ```

## Installation

Para el correcto funcionamiento se requiere de los siguientes tecnologías:

1. NodeJS
2. Express
3. Sequelize
4. MariaDB
5. Git

Para agilizar el desarrollo se ha utilizado el paquete _nodemon_ que se encuentra en las dependencias de desarrollo del paquete _package.json_.

Para poder instalar todo lo necesario a excepción del servidor MySQL hay que seguir los siguientes pasos:

### \# Clonar repositorio

```shell
git clone https://github.com/raulalhena/Dice-Game-MySQL.git
```

### \# Instalación

```shell
npm install
```

### \# Creación de archivo .env en el directorio raíz de la app

```shell
touch .env
```

### \# El archivo .env tendrá las siguientes variables:

```shell
DB_NAME = 7_game
DB_USER = USUARIO_BBDD
DB_PASS = PASSWORD_BBDD
DB_HOST = localhost
```

### \# Ejecución del servidor

```shell
npm run dev
```

## Stack

1. NodeJS
2. Express
3. Sequelize
4. MariaDB

## Contact info

Contactame a mi email: raul.alhena@gmail.com

## License

GNU General Public License v3.0
[GNU](https://opensource.org/licenses/GPL-3.0)
