
const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.accessToken
    }
});

let socketConnected = false;

socket.on('connect', () => {

  // console.log('Socket connected');
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
  
    //disconnect user
    socket.on('disconnect', () => {
      // console.log('Socket disconnected')
    });

    // Delete room list
    document.getElementById("roomList").innerHTML = '';

    // Retrieve room list 
    socket.emit('get-rooms');
})