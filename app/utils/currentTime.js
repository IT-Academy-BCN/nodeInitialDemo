const currentTime = option => {

    let format; 

    switch(option){
        case "date": format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; break;
        case "time": format = { hour: 'numeric', minute: 'numeric', hour12: true }; break;
        default: format = {}; break;
    }
    return new Date().toLocaleString("es-ES", format)
}

export default currentTime;