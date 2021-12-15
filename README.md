
# DICES GAME

Simulació de un joc de daus. 

Per iniciar l'API: Ubicats a la carpeta nodeInitialDemo > npm start o npm run dev per a la versió desenvolupament (nodemon)

IMPORTANT! En cas de no tenir instal·lat mongo com a servei o en cas que no s'inicie el servei automaticament
           es necessari teclejar amb un terminal adicional > mongod
           
A la carpeta arrel trobareu l'arxiu de la col·lecció POSTMAN per a realitzar les peticions.
També podeu utilitzar el vincle que comparteix la col·lecció.

https://www.postman.com/xaviercomi/workspace/public/collection/17998947-10220b4a-a607-456e-85e7-cf3c7953a7c8

COM UTILITZAR: 

NOTA * LLeguir la documentació de les peticions fent clic al menú "view documentaction", i un cop creats el jugadors
       utilizar el llistat (get all players), facilita l'ùs de les peticions i obtenció del "id" per a utilitzar l'API. 
       totes les peticions dirigides a un jugador en especial requereixen afegir el "id" del jugador al final de la ruta. 

![image](https://user-images.githubusercontent.com/85874705/143659824-9713e854-443c-48ea-9236-cc5280750935.png)


1. add a player: requereix entrar el nom del jugador a la pestanya de Body de POSTMAN
2. utilitzant el id del jugador crearem tirades de daus a rollDices. 
3. Després de comprovar el nombre de tirades (get number of throws) i el nombre de victories (get number of wins)
4. Actualitzarem el nombre de tirades (update throws), les victories(update wins) i el percentatge de victoria de cada jugador (update percentage)*
5. Ara podrem obtenir el ranking del jugadors (get the ranking)
6. També podrem eliminar de forma individual o global els jugador i les tirades
7. Finalment podrem obtenir un llistat de jugadors amb totes les seves tirades (full content) i un llista simplificats dels jugadors.

* ATENCIO! Si el jugador no te les victories i les tirades actualitzades la peticio de percentatge fara exlotar l'ordinador.
