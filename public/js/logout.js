document.querySelector('[name="leave-btn"]').addEventListener('click', () => {
    const leaveRoom = confirm('Are you sure that you want to log off?');
    if(leaveRoom){
        sessionStorage.clear();
        window.location.replace('../html/login.html');
    }
})


