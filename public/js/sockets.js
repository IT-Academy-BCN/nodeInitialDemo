const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 3600,
    query: {
        'token': sessionStorage.accessToken
    }
});


let socketConnected = false;

socket.on('connect', () => {

    if (socketConnected) return;
    socketConnected = true;

  console.log(`userName: ${sessionStorage.userName}`)
  console.log(`userId: ${sessionStorage.userId}`)
  console.log(`accessToken: ${sessionStorage.accessToken}`)

    socket.on('new-message', message => {
        // console.log("new-message", message);
        outputMessage(message);
    })

    socket.on('new-join-message', message => {
        // console.log("new-join-message", message);
        joinedMessage(message);
    })

    socket.on('new-room', (room, users) => {
        // console.log('new-room room', room);
        // console.log('new-room users', users);
        outputRoom(room);
        outputUsers(room, users);
    })

    socket.on('users-update', (room, users) => {
        // console.log('update-room-users', room, users);
       outputUsers(room, users);
    })

   
    socket.on('disconnect', () => {
      // console.log('Socket disconnected')
    });
   
    // Delete room list
    document.getElementById("room-list").innerHTML = '';
  
    
    // Ask for the room list again
    socket.emit('get-rooms');
})

