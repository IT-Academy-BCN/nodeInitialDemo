//append user to user list
const outputUser = (users) => {

    const userList = document.getElementById("#user-list");
    userList.innerHTML = "";

    // Iterate over users array
    //create li element for each user
    users.forEach(u => {
        const li = document.createElement('li');
        li.classList.add('user__li');
        li.textContent = u.userName;
        li.setAttribute('id', u.userId);

        // Append the user to the userList
        userList.appendChild(li);
    });

}

//delete user 
const deleteUser = (user) => {
    var item = document.getElementById(user.userId);
    if (item) item.parentNode.removeChild(item);
}

//output users to DOM
const outputUsers = () => {

    let user = document.querySelector('.user');
    user.classList.toggle('responsive');

    let room = document.querySelector('.room');
    room.classList.toggle('d-none');

    let chat = document.querySelector('.chat');
    chat.classList.toggle('d-none');
    
    if (user.classList.contains('responsive')){
        let userList = document.querySelector('#user-list');
        userList.addEventListener('click', e => {
            e.preventDefault();
            user.classList.remove('responsive');
            room.classList.remove('d-none');
            chat.classList.remove('d-none');

        });
    }
}