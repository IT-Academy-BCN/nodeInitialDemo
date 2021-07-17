const socket = io();

socket.on("connect", () => {
    console.log("Connected, id:", socket.id);
});

let message = document.getElementById('message');
let username = document.getElementById('username');
let sendButton = document.getElementById('send');
let actions = document.getElementById('actions');
let output = document.getElementById('output');

sendButton.addEventListener('click', function(){
    const time = Date.now();
    const today = new Date(time);
    socket.emit('chat:message', {
        time: today.toLocaleTimeString(),
        date: today.toLocaleDateString(),
        username:  username.value,
        message: message.value
    });
    message.value = '';
    message.focus();
});

message.addEventListener('keydown', (event) => {
    socket.emit('chat:typing', username.value);
    if(event.key === "Enter"){
        event.preventDefault();
        sendButton.click();
        actions.innerHTML = '<p></p>';
    }
});

socket.on('chat:message-server', (data) => {
    actions.innerHTML = '<p></p>';
    output.innerHTML += `<div id="output">
                            <div class="chat-date"> ${data.date}-${data.time}</div>
                            <div class="chat-line">
                            <strong>${data.username}</strong>: ${data.message}
                            </div>
                        </div>`;
});

socket.on('chat:typing-server', (username) => {
    actions.innerHTML = `<p>
                            <strong>${username}</strong> is typing...
                        </p>`;
});

