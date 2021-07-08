const socket = io();

socket.on("connect", () => {
    console.log("client", socket.id);
});