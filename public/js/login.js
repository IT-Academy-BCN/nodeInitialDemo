document.querySelector('.entry-form').addEventListener("submit", e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('.entry-form [name="username"]').value;
    const password = document.querySelector('.entry-form [name="password"]').value;
    const apiUrl = 'http://localhost:3000';

    fetch(apiUrl +'/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {

            // Store session variables
            sessionStorage.userId = data.user.userId;
            sessionStorage.userName = data.user.userName;
            sessionStorage.accessToken = data.accessToken;

            // Go to chat window
            window.location.assign('../html/chat.html');

        } else {
            document.getElementById("login-error").innerHTML = data.message;
        }
    }).catch(err => document.getElementById("login-error").innerHTML = err.message);
});

