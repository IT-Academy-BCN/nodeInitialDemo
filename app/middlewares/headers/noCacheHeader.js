const nocache = (req, res, next) => {
    res.header("Cache-Control", "no-cache");
    next();
  }

export default nocache;






/* 
INFO SOBRE ENCABEZADOS

res.setHeader() -> método nativo de NodeJS. Único o varios encabezados
    Establece un valor de encabezado único para los encabezados implícitos. 
    Si este encabezado ya existe en los encabezados a enviar, se reemplazará su valor. 
    Utilice una matriz de cadenas aquí para enviar varios encabezados con el mismo nombre

    res.setHeader('x-single', 'y')
    res.setHeader('x-multi', [1, 2])

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  
res.writeHead() -> método nativo de NodeJS. Único o varios encabezados
    Envía un encabezado de respuesta a la solicitud. El código de estado es un código de estado HTTP de 3 dígitos, como 404. 
    El último argumento, headers son los encabezados de respuesta.
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Set-Cookie": "type=ninja"
    });


res.header() alias de res.set() -> métodos de Express. Único o varios encabezados

    res.set('Content-Type', 'text/plain');
    res.header('Content-Type', 'text/plain');

    res.set({
      'Content-Type': 'text/plain',
      'Set-Cookie": "type=ninja',
    });

    res.header({
      'Content-Type': 'text/plain',
      'Set-Cookie": "type=ninja',
    });

 */