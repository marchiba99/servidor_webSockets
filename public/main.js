//Creamos la variable del socket escuchando en el puerto del servidor

/*var socket = io.connect('http://localhost:8080', { 'forceNew': true });

//Esto metodo se escuchara al recibir un emit desde el servidor
socket.on('messages', function(data) {
   console.log(data);
   render(data);
})*/

// función que hará que el objeto data con el mensaje se muestre en pantalla
/*
function render(data) {
        var html = data.map(function(elem, index) {
            return(`<div>
                     <strong>${elem.author}</strong>:
                     <em>${elem.text}</em>
            </div>`);
    }).join(" ");

    //Buscara en el documento la id de messages e igualará el valor 
    // al valor de nuestra variable html
        document.getElementById('messages').innerHTML = html;
    } 
    */

    //Permite añadir mensajes al servidor
  /*
      function addMessage(e) {
            var mensaje = {
            author: document.getElementById('username').value,
            text: document.getElementById('texto').value
          };
              
          socket.emit('new-message', mensaje);
          return false;
        } 
        */
    
        
        