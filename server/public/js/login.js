   const loginForm = document.querySelector(".loginForm");

   loginForm.addEventListener("submit", e => {
        e.preventDefault();
    
        sessionStorage.clear();
    
        const userName = document.querySelector('input[name="login-name"]').value;
        const password = document.querySelector('input[name="login-password"]').value;
    
        fetch('http://localhost:3000/api/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userName, password})
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
    
                //Storing session variables 
                sessionStorage.userId = data.user.userId;
                sessionStorage.userName = data.user.userName;
                sessionStorage.accessToken = data.accessToken;
    
                // jump to chat
                window.location.assign('../html/chat.html');
    
            } else {
                document.getElementById("login-error").innerHTML = data.message;
            }
        }).catch(err => document.getElementById("login-error").innerHTML = err.message);
    });


 
    




