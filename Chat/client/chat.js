const socket = io.connect('http://localhost:6677', {'forceNew': true}) //forzamos la conexion

socket.on('messages', (data) => {
    if(data.room === document.getElementById('roomSelector').value) {
        render(data);
    }
    //if data.sala === sala que tiene seleccionada, entoncs render(data),
    // si no ignoramos mensaje porque iba para otra sala
    console.log('me ha llegado', data);
});

function render(data){
    let newMessageHtml = `<div class="message">
        <strong>${data.nickname}</strong>
        <p>${data.text}</p>
        </div>`;

    document.getElementById('messages').innerHTML += newMessageHtml;
}

document.getElementById('formularioChat').addEventListener('submit', event =>{
    event.preventDefault(); //para que no se vaya a otra pag
    const token = sessionStorage.getItem('token');
    let payload = {
        token,
        //nickname: (new URLSearchParams(window.location.search)).get('username'),
        text: document.getElementById('text').value,
        room: document.getElementById('roomSelector').value
    }
    socket.emit('add-message', payload); //le pasamos el mensaje para que lo guarde en el servidor
    document.getElementById('text').value = '';
    return false; //para que corte la ejecucion
});

document.getElementById('roomSelector').addEventListener('change', event =>{
    document.getElementById('messages').innerHTML = '';
});

