//retrieve message from chat-form input, room and user from sessionStorage
document.querySelector('.chat-form button').addEventListener('click',() => {
    const text = document.querySelector('.chat-form input').value;
    const user = {userId: sessionStorage.userId, userName: sessionStorage.userName};
    const room = {roomId: sessionStorage.roomId, roomName: sessionStorage.roomName};
    
    //send message with room and user info to backend
    if (text) {
        let message = {user, room, text};
        socket.emit('new-message', message);
        outputMessage(message);
        text = '';
    }

    return false;
})

//outout chat messages to dom
const outputMessage = (message) => {
    
    // current message list on display
    let messageList = document.querySelector("#message-list");

    // create element to eventually append to current message list
    let li = document.createElement('li');
    li.classList.add('chat-list')
    li.textContent = message.text;

    // Get the last inserted Ul rom list
    let ul = document.getElementById('last-message');
    
    if(ul)
    {document.getElementById("last-message").removeAttribute("id");}

        // Create new ul element
        ul = document.createElement('ul');
        ul.setAttribute('id', 'last-message');
        ul.setAttribute('user-id', message.user.userId)

        // align user's messages to the right
        if (message.user.userId === sessionStorage.userId) {
            ul.classList.add('user-message')
        } else {
         // align other users's messages to the left
            const name = document.createElement('li')
            name.textContent = message.user.userName;
            messageList.appendChild(name);
            ul.classList.add('alien-message')
        }
        
        ul.appendChild(li);

        messageList.appendChild(ul);
   
      
    messageList.scrollTop = messageList.scrollHeight;
}

//output user joining room

const joinedMessage = () => {

    document.getElementById('lastMessage').removeAttribute('id');

    let messageList = document.getElementById('messageList');

    // Create the element to append
    let li = document.createElement('li');
    li.classList.add('chat-list-join')
    li.textContent = message;
    li.setAttribute('id', 'lastMessage');

    messageList.appendChild(li);
    messageList.scrollTop = messageList.scrollHeight;
}


