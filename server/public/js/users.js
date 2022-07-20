
//display user
const  displayUsers = (users) => {};

  
//delete user
const deleteUser = (user) => {};


unction showUsers() {

    // Delete error/success message
    document.getElementById("roomError").innerHTML = "";
    document.getElementById("roomSuccess").innerHTML = "";

    let user = document.getElementById('user');
    user.classList.toggle('responsive');

    let room = document.getElementById('room');
    room.classList.toggle('d-none');

    let chat = document.getElementById('chat');
    chat.classList.toggle('d-none');
    
    if (user.classList.contains('responsive')){
        let userList = document.getElementById('userList');
        userList.addEventListener('click', e => {
            e.preventDefault();
            user.classList.remove('responsive');
            room.classList.remove('d-none');
            chat.classList.remove('d-none');

            // Delete error/success message
            document.getElementById("roomError").innerHTML = "";
            document.getElementById("roomSuccess").innerHTML = "";
        });
    }
}

