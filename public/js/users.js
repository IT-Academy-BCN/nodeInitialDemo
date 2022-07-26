//append user to user list
const outputUser = (users) => {

    const userList = document.querySelector(".users-list");
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

