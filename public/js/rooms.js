
//add new room
const createRoom = () => {
       
        const roomName = document.querySelector("#new-room").value;
        if (roomName) {
            socket.emit('new-room', roomName);
            document.querySelector("#new-room").value ='';
         } else {
          return false;
         }
}

const joinRoom = (room) => {

  //check that option is not current room
  if (sessionStorage.roomId === room.roomId) {
    return;
  }
  // emit to server 'join-room' event
  socket.emit('join-room, room');

  //update variables
  sessionStorage.roomName = room.roomName;
  sessionStorage.roomId = room.roomId;

  // clear messages from former room
  document.querySelector("#message-list").innerHtml = "";

}