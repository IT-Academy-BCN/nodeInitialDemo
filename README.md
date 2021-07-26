
# Node Initial Project

### Project Structure

Abans d'executar el projecte, s'ha d'executar el fitxer database.sql per tenir la base de dades creada!!!

Per iniciar el projecte s'ha d'executar 'npm start'.

POSTMAN

<b>https://www.getpostman.com/collections/490c2fadd87115a597b2</b>

ENDPOINTS

Crear usuari (POST)
<b>http://localhost:8080/users</b>

Postman (body raw JSON)
<b>{"name": "Pepe"}</b>

-----------------------------------

Modifica el mom de l'usuari (PUT)
<b>http://localhost:8080/users/1</b>

Postman (body raw JSON)
<b>{"name": "Pepito"}</b>

-----------------------------------

Fer una tirada (POST)
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