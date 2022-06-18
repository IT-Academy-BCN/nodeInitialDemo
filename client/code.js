(function(){
     const app = document.querySelector('.app');
     const socket = io();

     let uname;

     app.querySelector(".join-screen #join-user").addEventListener("click",function(){
          let username = app.querySelector(".join-screen #username").value;
          if(username.length == 0){
               return;
          } 
          socket.emit("newuser",username);
          uname = username;
          app.querySelector(".join-screen").classList.remove("active");
          app.querySelector(".chat-screen").classList.add("active");
     });

     app.querySelector(".chat-screen #add-chatroom").addEventListener("click",function(){
          let chatroom = app.querySelector(".chat-screen #chatroom-input").value;
          if(chatroom.length == 0){
               return;
          }
          socket.emit("newchatroom",chatroom);
          app.querySelector(".chat-screen #chatroom-input").value = "";
     });

     app.querySelector(".chat-screen #chatroom-select").addEventListener("change",function(){
          let chatroom = app.querySelector(".chat-screen #chatroom-select").value;
          socket.emit("switchchatroom",chatroom);
     });

    
       app.querySelector(".chat-screen #send-message").addEventListener("click",function(){
          let message = app.querySelector(".chat-screen #message-input").value;
          let chatroom = app.querySelector(".chat-screen #chatroom-select").value;
          if(message.length == 0 && chatroom.length == 0){
               return;
          }
          renderMessage("chat", {
               username: uname,
               chatroom: chatroom,
               text: message
          });
          socket.emit("chat", {
               username:uname,
               chatroom:chatroom,
               text: message
             
          });
          app.querySelector(".chat-screen #message-input").value= "";
     });

     app.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){
          socket.emit("exituser",uname);
          window.location.href = window.location.href;
     });

     socket.on("update",function(update){
          renderMessage("update",update);
     });
     socket.on("chat",function(message){
          renderMessage("chat",message);
     });

   socket.on("switchchatroom",function(chatroom){
          renderMessage("update",chatroom); 
   }); 
   
  
   socket.on("nuevasala",function(chatroom){
     //TODO: Recibimos un listado de salas desde la base de datos. Recargar el select con este listado.
     app.querySelector(".chat-screen #chatroom-select").innerHTML = "";
     for (let i = 0; i < chatroom.length; i++) {
          app.querySelector(".chat-screen #chatroom-select").innerHTML += `<option value="${chatroom[i].xatroom_name}">${chatroom[i].xatroom_name}</option>`;
     }
});

     function renderMessage (type, message) {
          let messageContainer = app.querySelector(".chat-screen .messages");
          if(type == "chat") {
               let el = document.createElement("div");
               el.setAttribute("class", "message my-message");
               el.innerHTML = `  
               <div>
               <div class="name">${message.username}</div>
               <div class="text">${message.text}</div>
               </div>
               `;
               messageContainer.appendChild(el);
          } else if (type == "update"){
               let el = document.createElement("div");
               el.setAttribute("class", "update");
               el.innerText = message;
               messageContainer.appendChild(el);
          }
          // scroll chat to end
          messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
     }
    
     
    // para cargar el listado de salas la primera vez y seleccionar el valor actual
     socket.emit("initxat");
     
  

})();

