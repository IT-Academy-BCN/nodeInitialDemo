
document.querySelector(".entry-form").addEventListener('submit', e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('.entry-form [name="username"]').value;
    const password = document.querySelector('.entry-form [name="password"]').value;
    const rePassword = document.querySelector('.entry-form [name="repassword"]').value;
    const registerError = document.querySelector("#register-error");
    const apiUrl = 'http://localhost:3000';

     //checking if repeted password match original 
    if (password !== rePassword) {
        registerError.innerHTML = 'Passwords do not match.';
        return;
    }
    console.log(password);
    fetch(apiUrl + '/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password, rePassword})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            
            window.location.replace('../index.html')
        } else {
            registerError.innerHTML = data.message;
        }
    }).catch(err => registerError.innerHTML = err.message);

})

