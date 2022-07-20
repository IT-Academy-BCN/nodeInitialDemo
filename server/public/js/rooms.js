const createRoom =() => {}
    
  //TODO

  const joinRoom = (room) => {
       
    // check if room is a new room
     if (sessionStorage.roomId === room.roomId){
        return;
     }

    // emit to server: change of room
    socket.emit('join-room', room);



}

//display current room
const displayRoom = (room) => {};
    

//display users in current room
const displayRoomUsers = (room, users) => {}