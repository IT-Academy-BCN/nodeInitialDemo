var socket = io.connect('http://localhost:3000', { 'forceNew': true });

function render(data) {
    var html = data.map(function(elem,index) {
        return(`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em> </div>`);
    }).join(" ");
    
    document.getElementById("messages").innerHTML = html;
}

socket.on('messages', function(data) {
    console.log(data);
    render(data);
});

function addMessage(e) {
    var user = document.getElementById('user').value;
    console.log(user);
    var message = {
        text: document.getElementById('texto').value,
        author: document.getElementById('fuser').value
    };
    socket.emit('new-message',message);
    return false;
}