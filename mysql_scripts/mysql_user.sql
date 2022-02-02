/*
FONTS:
 - https://stackoverflow.com/a/61777687
 - https://stackoverflow.com/questions/2126225/why-is-a-grant-usage-created-the-first-time-i-grant-a-user-privileges

RAONAMENT:
- És mala pràctica connectar com a root, cal crear un usuari per l'aplicació i donar-li permisos només amb la base de dades de l'aplicació.

INSTRUCCIONS:
- Caldrà modificar aquest script quan l'executem amb el host real on estigui MySQL, posar-li un password del nivell de robustesa que calgui i copiar el host i el password a les variables d'entorn a .env file.
- Arxiu a executar contra la base de dades el primer cop que executem l'app i després de crear les taules com a root (perquè la base de dades 'devteam_todoapp' existeixi).
 */

CREATE USER 'todoapp_user'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT USAGE ON *.* TO 'todoapp_user'@'localhost';
ALTER USER 'todoapp_user'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON devteam_todoapp.* TO 'todoapp_user'@'localhost';
FLUSH PRIVILEGES;
