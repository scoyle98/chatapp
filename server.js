var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 2000});
var clients = [];

console.log("listening on port 2000");

server.on("connection", function(connection) {
  console.log("Client connected!");
  clients.push(connection);
  connection.on("close", function (){
    var x = clients.indexOf(connection);
    clients.splice(x, 1);
    console.log(clients.length);
  });
  connection.on("message", function(message){
    var msg = JSON.parse(message);
    var msg_decoded = (msg.name + ": " + msg.words);
    console.log(msg_decoded);
    clients.forEach(function(client){
      client.send(msg_decoded);
    });
  });
});
