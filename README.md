# Entrega 4.1: Node REST Server
La aplicación trabaja en el puesto **5555**.
Para iniciar el servidor:
```
npm run dev
```
## Endpoints
### GET /user
Devuelve el siguiente objeto JSON:
```
{
    "name": "Luis",
    "edad": 41,
    "url": "localhost/user"
}
```
### POST /upload
Permite subir imágenes JPG, PNG y GIF.
Se debe pasar la imágen vía formulario con la key/name **imgfile**.
- En caso de éxito devuelve un código 200.
- En caso de error devuelve un código 400 o 415.
- Si hay error en el server al guardar la imagen devolverá un 500.

### POST /time
Devuelve fecha y hora del server en el siguiente formato:
```
{
    "fecha": "2022-04-22",
    "hora": "08:41:18"
}
```
En los *headers* de la petición se deben incluir las keys:
- user: usuario
- pass: password

## Testeo endpoints con postman
En carpeta */postman* se puede encontrar el fichero **POSTMAN.json** que contiene la colección de peticiones para probar la API. En la subcarpeta *S4.1* están las imágenes/archivos utilizados.