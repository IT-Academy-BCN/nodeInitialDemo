
const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.accessToken
    }
});

let socketConnected = false;

socket.on('connect', () => {

  // console.log('Socket connected');

    // TODO: we make sure we only connect once. 
    // This prevents the client to connect again when server disconnects.
    // Find the right way to do this.
    if (socketConnected) return;
    socketConnected = true;

  // console.log(`userName: ${sessionStorage.userName}`)
  // console.log(`userId: ${sessionStorage.userId}`)
  // console.log(`accessToken: ${sessionStorage.accessToken}`)
    
  //displays new message in chat
    socket.on('new-message', message => {
        // console.log("new-message", message);
        displayMessage(message);
    })
    //emits join message to chat
    socket.on('new-join-message', message => {
        // console.log("new-join-message", message);
        displayJoinMessage(message);
    })
    
    //new room created, updating user list
    socket.on('new-room', (room, users) => {
        // console.log('new-room room', room);
        // console.log('new-room users', users);
        displayRoom(room);
        displayRoomUsers(room, users);
    })

    socket.on('update-room-users', (room, users) => {
        // console.log('update-room-users', room, users);

        // Display updated list
        if (sessionStorage.roomId === room.roomId) {
            displayUsers(users)
        }
        displayRoomUsers(room, users);
    })
    /*
    socket.on('error', message => {
        document.getElementById("roomError").innerHTML = message;
    })

    socket.on('success', message => {
        console.log("here")
        document.getElementById("roomSuccess").innerHTML = message;
    })
    */
    
    //disconnect user
    socket.on('disconnect', () => {
      // console.log('Socket disconnected')
    });

    // Delete room list
    document.getElementById("roomList").innerHTML = '';

    // Retrieve room list 
    socket.emit('get-rooms');
})