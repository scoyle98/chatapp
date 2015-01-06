var WSS = require('ws').Server;
var server = new WSS({port: 3000});

var clients = [];
// var history  = [];
server.on("connection", function(ws) {
  clients.push(ws);
  ws.on("message", function(msg){
    clients.forEach(function(elem){
      elem.send(msg);
    })
    ws.send(msg);
  })
});

ws.on("close", function (){
  var x = clients.indexOf(ws);
  clients.splice(x, 1);  //when user disconnects, removes user from user list
  console.log(clients.length); //lets server know # of users in chatroom
});
