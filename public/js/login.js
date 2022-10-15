       document.querySelector(".login-form").addEventListener("submit", e => {
        e.preventDefault();
    
        sessionStorage.clear();
       //assigning variables from input fields
        const userName = document.querySelector('[name="login-username"]').value;
        const password = document.querySelector('[name="login-password"]').value;
        console.log(userName + password);
        
        //fetch result from authentication
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({userName, password})
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
    
                //storing session variables 
                sessionStorage.userId = data.user.userId;
                sessionStorage.userName = data.user.userName;
                sessionStorage.accessToken = data.accessToken;
    
                // and jump to chat page
                window.location.replace('../html/chat.html');
    
            } else {
                document.getElementById("login-error").innerHTML = data.message;
            }
        }).catch(err => document.getElementById("login-error").innerHTML = err.message);
    });


 
    




