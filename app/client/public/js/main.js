const socket = io.connect('http://localhost:3000');

const room = document.getElementById('room');
const newroom = document.getElementById('r4');
const feedback = document.getElementById('feedback');
const message = document.getElementById('message');
const write = document.getElementById('write');
const output = document.getElementById('output');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
let roomname = urlParams.get('roomname');

function adduser() {
  document.getElementById('room').innerHTML = `Welcome to ${roomname} room`;
  let user = {
    username: username,
    roomname: roomname,
  };

  socket.emit('adduser', user);
}

function addMessage() {
  let m = document.getElementById('message').value;
  socket.emit('sendxat', {
    username: username,
    message: m,
    roomname: roomname,
  });
  message.value = '';
}

const clearBox = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('write').innerHTML = '';
};

function enterRoom(r, user) {
  document.getElementById('room').innerHTML = `Welcome to ${sala} room`;
  roomname = r;
  socket.emit('switchRoom', {
    username: user,
    roomname: r,
  });
  newroom.value = '';
}

const todos = (r, user) => {
  enterRoom(r, user);
  clearBox();
};

function render(data) {
  console.log(data);
  let messages = data
    .map(function (data, index) {
      return `<div><strong>${data.username}</strong>:
        <strong>${data.message}</strong>`;
    })
    .join(' ');

  write.innerHTML = messages;
}

socket.on('messages', (data) => {
  render(data);
});

socket.on('updatexat', (username, data) => {
  write.innerHTML += `<p><strong>${username}: ${data}</strong></p>`;
  feedback.innerHTML = '';
});

socket.on('adduser', (data) => {
  output.innerHTML += `<p id="unido"> <strong>${data} </strong></p>`;
});

function replaceUrlParam(paramName, paramValue) {
  var url = window.location.href;

  if (paramValue == null) {
    paramValue = '';
  }

  var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, '$1' + paramValue + '$2');
  }

  url = url.replace(/[?#]$/, '');
  return (
    url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue
  );
}

r3.addEventListener('click', () => {
  var newurl = replaceUrlParam('roomname', newroom.value);
  history.pushState(null, null, newurl);

  todos(newroom.value,username);
});

