
//add new room
document.querySelector('[name="add-roombtn"]').addEventListener('click', () => {

        const roomName = document.querySelector('[name="new-room"]').value;
        if (roomName) {
            socket.emit('add-room', roomName)
            document.querySelector('[name="new-room"]').value ="";
         }
    return false;
})


//join a new room
const joinRoom = () => {

  // check that new room is other than current room
  if (sessionStorage.roomId === room.roomId) return;

  socket.emit('join-room', room);

  // Session storage variable update
  sessionStorage.roomName = room.roomName;
  sessionStorage.roomId = room.roomId;

  // Change current room name
  document.querySelector("room-name").innerHTML = `${room.roomName}`;
  // Delete messages from old room
  document.querySelector("message-list").innerHTML = "";

 //Clear up
  document.querySelector('[name="new-room"]').value = "";
  document.querySelector('[name="new-message"]').value = "";

  document.querySelector('[name="new-message"]').focus();
}


//output current room
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
          document.querySelector(sessionStorage.roomId).classList.remove('room-btn--active')
      }

      btn.classList.add('room-btn--active');
      joinRoom(room);

      let currentRoom = document.querySelector('room');
      if (currentRoom.classList.contains('responsive')) {

        currentRoom.classList.remove('responsive');
          
          let currentUser = document.querySelector('user');
          currentUser.classList.remove('d-none');
          
          let chat = document.querySelector('chat');
          chat.classList.remove('d-none');
      }
  }

  const rooms = document.querySelector("room-list");
  rooms.appendChild(btn);

  sortBtnList("room-list");
}

//outputRoomUsers
const outputRoomUsers = (room, users) => {
  document.getElementbyID(room.roomId).textContent = `${room.roomName} (${users.length})`
}

//output all currents rooms
document.querySelector('room-display button').addEventListener('click', () => {

  let room = document.querySelector('#chat-room');
  room.classList.toggle('responsive');

  let user = document.querySelector('#chat-user');
  user.classList.toggle('d-none');

  let chat = document.querySelector('#chat');
  chat.classList.toggle('d-none');

  if (room.classList.contains('responsive')){
      let roomList = document.querySelector('#room-list');
      roomList.addEventListener('click', e => {
          e.preventDefault();
          room.classList.remove('responsive');
          user.classList.remove('d-none');
          chat.classList.remove('d-none');
    });
  }
})



