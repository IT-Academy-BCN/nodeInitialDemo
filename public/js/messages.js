document.querySelector('[name="send-message"]').addEventListener('click',() => {
    const text = document.querySelector('[name="new-message"]').value;
    const user = {userId: sessionStorage.userId, userName: sessionStorage.userName};
    const room = {roomId: sessionStorage.roomId, roomName: sessionStorage.roomName};

    if (text) {
        let message = {user, room, text};
        socket.emit('new-message', message);
        outputMessage(message);
        text = '';
    }

    return false;
})


const outPutMessage = (message) => {

    let messageList = document.getElementById("message-list");

    // Create the element to append
    let li = document.createElement('li');
    li.classList.add('chat__li')
    li.textContent = message.text;

    // Get the last inserted Ul
    let ul = document.getElementById('last-message');

    // If last inserted ul has the same userId then append and we are done.
    if (ul && (ul.getAttribute('userId') === message.user.userId)) {
        // Same user, append message to last ul.
        ul.appendChild(li)
    } else {
        if (ul) document.getElementById("last-message").removeAttribute("id");

        // Create new ul
        ul = document.createElement('ul');
        ul.setAttribute('id', 'last-message');
        ul.setAttribute('userId', message.user.userId)

        // my messages will be aligned different
        if (message.user.userId === sessionStorage.userId) {
            ul.classList.add('my-message')
        } else {
            const name = document.createElement('li')
            name.textContent = message.user.userName;
            messageList.appendChild(name);
            ul.classList.add('others-message')
        }
        
        ul.appendChild(li);

        messageList.appendChild(ul);
    }

    messageList.scrollTop = messageList.scrollHeight;
}


