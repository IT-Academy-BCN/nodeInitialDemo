/* FEATURED FUTURA PARA MOSTRAR TODOS LOS USUARIOS CONECTADOS A LA SALA DE CHAT */

const saveUserSession = (username, locals) => {
    locals.session.users.push(username);
}

const removeUserSession = (locals) => {
    locals.session.users.splice(locals.session.users.findIndex(locals.session.username),1);
}

export {
    saveUserSession,
    removeUserSession
}