

let socketConnected = false;s

socket.on('connect', () => {

  
    if (socketConnected) return;
    socketConnected = true;

  console.log(`userName: ${sessionStorage.userName}`)
  console.log(`userId: ${sessionStorage.userId}`)
  console.log(`accessToken: ${sessionStorage.accessToken}`)

    socket.on('new-message', message => {
        // console.log("new-message", message);
        displayMessage(message);
    })

    socket.on('new-join-message', message => {
        // console.log("new-join-message", message);
        displayJoinMessage(message);
    })

    socket.on('new-room', (room, users) => {
        // console.log('new-room room', room);
        // console.log('new-room users', users);
        displayRoom(room);
        displayRoomUsers(room, users);
    })

    socket.on('update-room-users', (room, users) => {
        // console.log('update-room-users', room, users);

        // Display users in our console
        if (sessionStorage.roomId === room.roomId) {
            displayUsers(users)
        }

        displayRoomUsers(room, users);
    })

    socket.on('error', message => {
        document.getElementById("roomError").innerHTML = message;
    })

    socket.on('success', message => {
        console.log("here")
        document.getElementById("roomSuccess").innerHTML = message;
    })

    socket.on('disconnect', () => {
      // console.log('Socket disconnected')
    });

    // Delete room list
    document.getElementById("roomList").innerHTML = '';

    // Ask for the room list again
    socket.emit('get-rooms');
})

