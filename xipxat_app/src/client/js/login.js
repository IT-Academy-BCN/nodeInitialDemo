
var $signupForm = document.getElementById('login');

$signupForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const userForm = new FormData($signupForm);
    $signupForm.reset();
    fetch("http://localhost:3000/login", {
        method: "POST",
        body: userForm,
        mode: "cors"
    })
    .then(res => {
        if (res.ok) {
            swal({
                title: "Access granted!",
                text:  "ready to chat?", 
                icon: "success",
                button: "start" 
            })
            .then( value => {
                if (value) {
                window.location.replace('./index.html') 
                } 
            })
        } else {
            swal({
                title: 'access NOT granted',
                text: "try again or register",
                icon: "error",
                buttons: ["try again", "register"],
            })
            .then( value => {
                if (value) {
                    window.location.replace('./signup.html')
                }
            })    
        }
    })
    .catch(err => console.log(err))

});


