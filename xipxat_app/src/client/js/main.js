$(document).ready(function () {

    const socket = io('http://localhost:3000');
    
    // obtaining DOM elements from chat
    const messageForm = $('#message-form');
    const chat = $('#chat');
    const message = $('#message');
    const logout = $('#linkLogout')

    // obtaining DOM elements from nickname
    const nickForm = $('#nickForm');
    const nickError = $('#nickError');
    const nickname = $('#nickname'); 
    const users = $('#usernames');
    const userbanner = $('#user-banner')

    // new user
    nickForm.submit( e => {
        e.preventDefault();
        socket.emit('new user', nickname.val(), data => {
            if (data) {
                $('#nickWrap').hide();
                $('#contentWrap').show();
                userbanner.html(`<g4><i class="fas fa-user"></i> ${nickname.val()}</g4>`);
            } else {
                nickError.html(`
                <div class="alert alert-danger">
                    <g4>username already in use</g4>
                </div>
                `);
            }
            nickname.val('');
        });
    });

    // TODO ENVIAR AL SERVIDOR LA DESCONEXION DEL USUARIO
    // user log out
    logout.submit( e=> {
        socket.emit('disconect', nickname.val(), data => {
            if (data) {
                swal("see you soon!")
            }
        } )
    })

    // events
    chat.on('new message', () => {
        chat.animate(scrollTo);
    });

    messageForm.submit( e => {
        e.preventDefault();
        socket.emit('send message', message.val(), data => {
            chat.append(`<p class="error">${data}</p>`);
        });
        $('#chat').animate({scrollTop:1000000},800);
        message.val('');
    });
    
    socket.on('new message', (msg) => {
        chat.append('<b>' + msg.nick + '</b>: ' + msg.msg + '<br/>');
    });

    socket.on('usernames', data => {
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`
        };
        users.html(html);
    });

    socket.on('secret', secretMsg => {
        chat.append(`<p class="secret"><b>${secretMsg.nick} to ${secretMsg.name}:</b> ${secretMsg.msg}</p>`);
    });

    socket.on('load old msgs', msgs => {
        for( let i in msgs) {
            chat.append(`<p class="secret"><b>${msgs[i].nick}:</b> ${msgs[i].msg}</p>`);
        }
    });

});
