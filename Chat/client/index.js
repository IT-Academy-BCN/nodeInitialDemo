const socket = io.connect('http://localhost:6677', {'forceNew': true}) //forzamos la conexion

socket.on('loginResult', (data) => {
    if(data.result === "ok") {
        sessionStorage.setItem('token', data.token);
        //como tenemos el user en el tokenm no hace falta ponerlo en la url
        window.location.href = '/chat.html';

        //take user to chat.html
        window.location.href = '/chat.html?username=' + data.name;
        //'/chat.html?username=123&pepe=1&lara=123'; mas de un query
    } else {
        alert('login not ok, try again');
        //login was not ok, show some error
    }
    console.log('me ha llegado', data);
});

document.getElementById('formulario').addEventListener('submit', event =>{
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    let payload = { name: user, password };
    socket.emit('login', payload);
    event.preventDefault();
    return false; //para anular ya que el comportamiento del folmuario por defecto que is a otra pagina
})