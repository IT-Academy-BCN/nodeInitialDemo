//TODO check that id:s are correct
//add new room
const addRoom = () => {
   
    const roomName = document.query('[name="new-room"]').value;

        if (roomName && roomName !== "") {
            socket.emit('new-room', roomName)
            document.query('[name="new-room"]').value ="";
         }
    return false;
}


//join a new room
const joinRoom = () => {

  // check that new room is other than current room
  if (sessionStorage.roomId === room.roomId) return;

  socket.emit('join-room', room);

  // Session storage variable update
  sessionStorage.roomName = room.roomName;
  sessionStorage.roomId = room.roomId;

  // Change current room name
  document.query("room-name").innerHTML = `${room.roomName}`;

  // Delete messages from old room
  document.query("message-list").innerHTML = "";

 //Clear up
  document.query('[name="new-room"]').value = "";
  document.query('[name="new-message"]').value = "";

  document.query('[name="new-message"]').focus();
}


//output room
outputRoom = (room) => {

  const btn = document.createElement('button');

  if (room.roomName === 'Room 0') {
      btn.classList.add('room-btn--active');
      joinRoom(room);
  }

  btn.textContent = room.roomName;
  btn.setAttribute('id', room.roomId);
  btn.classList.add('room-btn');
  btn.onclick = () => {

      if (sessionStorage.roomId) {
          document.query(sessionStorage.roomId).classList.remove('room-btn--active')
      }

      btn.classList.add('room-btn--active');
      joinRoom(room);

      let currentRoom = document.query('room');
      if (currentRoom.classList.contains('responsive')) {

        currentRoom.classList.remove('responsive');
          
          let currentUser = document.query('user');
          currentUser.classList.remove('d-none');
          
          let chat = document.query('chat');
          chat.classList.remove('d-none');
      }
  }

  const rooms = document.query("room-list");
  rooms.appendChild(btn);

  sortBtnList("room-list");
}


const displayRoomUsers = (room, users) => {
  document.query(room.roomId).textContent = `${room.roomName} (${users.length})`
}



const outputRooms = () => {

  // Delete error/success message

  let room = document.query('room');
  room.classList.toggle('responsive');

  let user = document.query('user');
  user.classList.toggle('d-none');

  let chat = document.query('chat');
  chat.classList.toggle('d-none');

  if (room.classList.contains('responsive')){
      let roomList = document.query('roomList');
      roomList.addEventListener('click', e => {
          e.preventDefault();
          room.classList.remove('responsive');
          user.classList.remove('d-none');
          chat.classList.remove('d-none');

      });
  }
}



