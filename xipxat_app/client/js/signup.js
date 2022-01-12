
var $signupForm = document.getElementById('register');

$signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userForm = new FormData($signupForm);
    $signupForm.reset();
    fetch("http://localhost:3000/signup", {
        method: 'POST',
        body: userForm,
        mode: 'cors'
    })
    .then(res => {
        if (res.ok) {
            swal({
                title: "Great!", 
                text: "new user added",
                icon: "success",
                button: "log in",
            })
            .then( () => window.location.replace('./login.html') )
        } else {
            swal({
                title: "User NOT added",
                text: "Are you registered?",
                icon: "error",
                buttons: ["try again", "log in"],
            })
            .then( value => {
                if (value) {
                    window.location.replace('./login.html')
                }
            })
        }
    })
    .catch(error => {
        console.log(error)
    });
});
