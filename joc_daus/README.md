
# <center><b style='color: red;'>**DICES🎲GAME**  </b></center>

Simulació de un joc de daus. 
	
Per iniciar l'API: Ubicats a la carpeta nodeInitialDemo/joc_daus> 

Insta·lar totes les llibreries. 
~~~
npm install 
~~~

Sel·lecioneu una opció. Podeu iniciar en mode *developer* (DEV) o usuari tant per utilitzar mongoDB o mySQL. Les opions developer utilitzen nodemon que caldrá instal·lar previament.
~~~
npm run startMongo
npm run startSQL
npm run DEVStartMongo
npm run DEVStartSQL
~~~

IMPORTANT! En cas de no tenir instal·lat mongo com a servei o en cas que no s'inicie el servei automaticament es necessari teclejar amb un terminal adicional 
~~~
mongod
~~~
Si heu instal·lat mysql amb l'instalador MSI ho teniu com a servei, Entreu al llistat de serveis i feu clic secundari al servei MySQL. i sel·leccioneu iniciar servei. Altre opció és desde la finestra del termimal:
~~~
mysql -u [username] -h [host] -p 
~~~        
A la carpeta arrel trobareu l'arxiu de la col·lecció POSTMAN per a realitzar les peticions.
També podeu utilitzar el vincle que comparteix la col·lecció joc_daus.

[col·lecció POSTMAN](https://www.postman.com/xaviercomi/workspace/public/collection/17998947-10220b4a-a607-456e-85e7-cf3c7953a7c8)
#
## Com jugar
___
* NOTA  
 Podeu lleguir la documentació de les peticions fent clic al menú *view documentation*. Totes les peticions dirigides a un jugador en especial requereixen afegir un  *id* de jugador al final de la ruta. 

![image](https://user-images.githubusercontent.com/85874705/143659824-9713e854-443c-48ea-9236-cc5280750935.png)

1. Afegir un jugador al joc amb un nom de jugador. En el cas de no utilitzar nom el sistema asignara el nom **ANONIM**. El jugador podrá cambiar el seu nom sempre que vulgui.
2. El jugador pot fer totes les tirades de daus que desitgi utilitzant l'opció **rollDices** i així acumular un registre de jugades.
3. Les jugades podrán ser victories si el valor de la suma del dos daus es **SET** i perdues en cas contrari.
4. El jugador pot veure totes les seves jugades i el percentatge de victories personal, dels altres jugador i el percentatge de victories de tots el jugadors.
5. Sempre que es faci el ***LOGIN*** El jugador també podrá eliminar les seves jugades afegint el token proporcionat a la capçalera de la petició amb el nom de clau **user-token**. És necessari estar registrat.
6. Per tal de fer el **REGISTRE** és necessari entrar un nom d'usuari, una adreça de correu electronic valida i una contrasenya.
___
## <center>Throw the craps!</center>
<a><center>![imagen](/joc_daus/media/craps.png)</a>