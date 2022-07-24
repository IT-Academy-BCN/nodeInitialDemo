let socket = io('http://localhost:3000',{
    reconnectionDelayMax: 3600,
    query: {
        'token': sessionStorage.accessToken
    }
});

let socketConnected = false;

socket.on('connect', () => {

   
    if (socketConnected) return;
    socketConnected = true;

 
      socket.on('new-message', message => {
       console.log("new-message", message);
        outputMessage(message);
    })
    //output user joining room
    socket.on('joined-message', message => {
        joinedMessage(message);
    })

    socket.on('new-room', (room, users) => {
        console.log('new-room room', room);
        console.log('new-room users', users);
        outputRoom(room);
        outputRoomUsers(room, users);
    })

    socket.on('users-update', (room, users) => {
        // console.log('update-roomusers', room, users);

        if (sessionStorage.roomId === room.roomId) {
            outputUsers(users)
        }

        outputRoomUsers(room, users);
    })

    socket.on('disconnect', () => {
      // console.log('Socket disconnected')
    })

    // Ask for the room list again
    socket.emit('get-rooms');
})