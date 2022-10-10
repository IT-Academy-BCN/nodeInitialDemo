    document.querySelector('.register-form').addEventListener("submit", e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('.register-form [name="register-username"]').value;
    const password = document.querySelector('.register-form [name="password"]').value;
    const repassword = document.querySelector('.register-form [name="repeat-password"]').value;

    if (password !== repassword) {
        document.getElementById("register_error").innerHTML = 'Your passwords do not match';
        return;
    }

    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password, repassword})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            window.location.assign('../index.html')
        } else {
            document.getElementById("register_error").innerHTML = data.message;
        }
    }).catch(err => document.getElementById("register_error").innerHTML = err.message);

})







/* const registerForm = document.querySelector(".registerForm");
registerForm.addEventListener('submit', e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('[name="register-username"]').value;
    const password = document.querySelector('[name="register-password"]').value;
    const repeatPassword = document.querySelector('[name="repeat-password"]').value;
    const registerError = document.querySelector("#register-error");
  
     //checking if repeted password match original 
    if (password !== repeatPassword) {
        registerError.innerHTML = 'Passwords do not match.';
        return;
    }
    console.log(password);
    fetch('http://localhost:3000/api/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password, repeatPassword})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            
            window.location.replace('./html/login.html')
        } else {
            registerError.innerHTML = data.message;
        }
    }).catch(err => registerError.innerHTML = err.message);

})

*/