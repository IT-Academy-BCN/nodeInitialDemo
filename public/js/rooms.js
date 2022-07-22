
//add new room
const addRoom = () => {
   
    const roomName = document.query('[name="new-room"]').value;

        if (roomName && roomName !== "") {
            socket.emit('new-room', roomName)
            document.query('[name="new-room"]').value ="";
         }
    return false;
}



