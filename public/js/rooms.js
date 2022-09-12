
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

  //check that option is other than current
  if (sessionStorage.roomId === room.roomId) {
    return;
  }
  // Emit to server 'join-room' event
  socket.emit('join-room, room');

  //Variable update
  sessionStorage.roomName = room.roomName;
  sessionStorage.roomId = room.roomId;

  // Clear messages from "old" room
  document.querySelector("#message-list").innerHtml = "";

}