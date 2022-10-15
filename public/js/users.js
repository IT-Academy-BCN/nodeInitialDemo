//creates list
const displayUsers = (users) => {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    // iterating the users array
    users.forEach(user => {
        //creating user 'li' element
        const li = document.createElement('li');
        li.classList.add('user__li');
        li.textContent = user.userName;
        li.setAttribute("id", user.userId);
        // append the user to the userList
        userList.appendChild(li);
    });
}
   
//delete user from list
const deleteUser = (user) => {
    let element = document.getElementById(user.userId);
    if (element) {
        element.remove();
    }
}
