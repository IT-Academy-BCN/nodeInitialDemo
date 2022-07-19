
const registerForm = document.querySelector(".registerForm");
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
            //
            window.location.assign('./html/login.html')
        } else {
            registerError.innerHTML = data.message;
        }
    }).catch(err => registerError.innerHTML = err.message);

})

