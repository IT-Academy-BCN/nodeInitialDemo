

## Node Initial Demo

Abans d'executar el projecte, s'ha d'executar el fitxer database.sql per tenir la base de dades creada!!!

ENDPOINTS

Crear usuari (POST)
<b>http://localhost:8080/users</b>

Postman (body form-data)
<b>{"name": "Pepe"}</b>

-----------------------------------

Modifica el mom de l'usuari (PUT)
<b>http://localhost:8080/users/1</b>

Postman (body form-data)
<b>{"name": "Pepito"}</b>

-----------------------------------

Modifica el mom de l'usuari (POST)
<b>http://localhost:8080/users/1/games</b>

-----------------------------------

Elimina les tirades de l'usuari (DELETE)
<b>http://localhost:8080/users/1/games</b>

-----------------------------------

Llista tots els usuaris (GET)
<b>http://localhost:8080/users</b>

-----------------------------------

Llista les tirades de l'usuari (GET)
<b>http://localhost:8080/users/1/games</b>

-----------------------------------

Mostra el ranking mig de tots els usuaris (GET)
<b>http://localhost:8080/users/ranking</b>

-----------------------------------

Mostra el usuari amb pitjor percentatge d'èxit (GET)
<b>http://localhost:8080/users/ranking/loser</b>

-----------------------------------

Mostra el usuari amb millor percentatge d'èxit (GET)
<b>http://localhost:8080/users/ranking/winner</b>
