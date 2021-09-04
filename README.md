## **Simple API Rest exercise**
***
To test these routes, have the Postman log in the repo: "REST_API.postman_collection.json".  
You can import it into Postman.

## How to run
***
```
npm start 
```

It will start nodemon and the server will listen by default on port 3000 if it is not in use.
***

## Features

### `Get user data from JSON`
Create an express server that returns a json with a name, age, and requested url to a GET / user request.

```
http://localhost:3000/api/user
```

API response: 
```json
{
    "user": {
        "name": "Cristian",
        "age": 31,
        "url": "http://localhost:3000/api/user"
    }
}
```


### `Upload an image`
Add an endpoint / upload to upload a file to the png, jpg, or gif server and return an error message if it does not match these extensions.

```
http://localhost:3000/api/upload
```
It needs a body with "file" as key and a picture as value.  
This route only accepts .png, .jpg/jpeg and .gif images.  
If you try to upload another type of file, the API will respond:
```json
Only .png, .jpg/jpeg and .gif format allowed!
```

If the image type is correct, the API will respond:

```json
{
    "message": "File uploaded successfully!",
    "file": {
        "fieldname": "file",
        "originalname": "1544051376616.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "C:\\Users\\Cristian\\Desktop\\IT_ACADEMY_SPRINT_4\\nodeInitialDemo\\app\\middlewares\\multer/../../public/uploads/",
        "filename": "2021-08-31T18-00-20.163Z1544051376616.jpg",
        "path": "C:\\Users\\Cristian\\Desktop\\IT_ACADEMY_SPRINT_4\\nodeInitialDemo\\app\\public\\uploads\\2021-08-31T18-00-20.163Z1544051376616.jpg",
        "size": 52146
    }
}
```
### `No-cache, CORS`
Creates a POST endpoint that receives a JSON with the username as a parameter and returns a JSON object that contains the current time and date. Include middleware that adds the 'Cache-control: no-cache' header. Enable CORS in responses, either via Express or other middleware.
```
http://localhost:3000/api/getdate
```
Body:
```json
{
    "name": "Cristian"
}
```
API response:
```json
{
    "date": "martes, 31 de agosto de 2021",
    "time": "8:02 p. m."
}
```

### `Basic authorization`
Add a middleware that returns an HTTP Status 401 - Unauthorized if the request header does not contain basic authentication.
```
http://localhost:3000/api/auth
```
Bad credentials:
```json
Unauthorized
```
Success Auth:
```json
{
    "date": "martes, 31 de agosto de 2021",
    "time": "8:03 p. m."
}
```