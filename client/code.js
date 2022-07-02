(function(){
     const app = document.querySelector('.app');
     const socket = io('http://localhost:5000');
     let uname;
     let cname;

     app.querySelector(".join-screen #join-user").addEventListener("click",function(){
          let username = app.querySelector(".join-screen #username").value;
          if(username.length == 0){
               return;
          } 
          socket.emit("newuser",username);
          uname = username;
          app.querySelector(".join-screen").classList.remove("active");
          app.querySelector(".chat-screen").classList.add("active");
          renderMessage("update", username + "  ha entrat al xat");
     });

     app.querySelector(".chat-screen #add-chatroom").addEventListener("click",function(){
          let chatroom = app.querySelector(".chat-screen #chatroom-input").value;
          if(chatroom.length == 0){
               return;
          }
          socket.emit("newchatroom",chatroom);
          app.querySelector(".chat-screen #chatroom-input").value = "";
          renderMessage("update", "S'ha creat la sala " + chatroom); 
     });

     app.querySelector(".chat-screen #chatroom-select").addEventListener("change",function(){
          app.querySelector(".chat-screen #message-input").disabled = false;
          let chatroom = app.querySelector(".chat-screen #chatroom-select").value;
          cname = chatroom;
          app.querySelector(".chat-screen .messages").innerHTML = "";
          socket.emit("switchchatroom", chatroom, uname);
     });

     app.querySelector(".chat-screen #send-message").addEventListener("click",function(){
          let message = app.querySelector(".chat-screen #message-input").value;
          if(message.length == 0 || cname.length == 0){
               return;
          }
          renderMessage("chat", {
               username: uname,
               chatroom: cname,
               text: message
          });
          socket.emit("chat", {
               username:uname,
               chatroom:cname,
               text: message
             
          });
          app.querySelector(".chat-screen #message-input").value= "";
     });

     app.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){
          socket.emit("exituser",uname, cname);
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
  
     socket.on("updateuserschannel",function(users){
          renderMessage("updateuser", users);
     });
          
     socket.on("nuevasala",function(chatroom){
          //TODO: Recibimos un listado de salas desde la base de datos. Recargar el select con este listado.
          app.querySelector(".chat-screen #chatroom-select").innerHTML = "<option disabled selected value> -- selecciona un canal -- </option>";
          for (let i = 0; i < chatroom.length; i++) {
               app.querySelector(".chat-screen #chatroom-select").innerHTML += `<option id="${chatroom[i].id}" value="${chatroom[i].name}">${chatroom[i].name}</option>`;
          }
          if (cname) {
               app.querySelector(".chat-screen #chatroom-select").value = cname;
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
          } else if (type == "updateuser"){
               let users = app.querySelector(".chat-screen .chatinfo .user-list");
               users.innerHTML = "<h2>Usuaris conectats</h2>";
               for (let i = 0; i < message.length; i++) {
                    let el = document.createElement("div");
                    el.setAttribute("class", "user");
                    el.innerText = message[i].name;
                    users.appendChild(el);
               }
          }
          // scroll chat to end
          messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
     }
    
     // para cargar el listado de salas la primera vez y seleccionar el valor actual
     socket.emit("initxat");

})();

