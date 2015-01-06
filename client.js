
var client = new WebSocket("ws://localhost:2000");

client.addEventListener("message", function(message){
  var ul = document.querySelector("ul");
  var newLi = document.createElement("li");
  var messageText = message.data;
  newLi.innerHTML = "<li>" + messageText + "</li>";
  ul.appendChild(newLi);
});

var message = document.getElementById("input");
var namebox = document.getElementById("namebox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var msg = {name: namebox.value}
  msg["words"] = message.value;
  var encoded_msg = JSON.stringify(msg);
  client.send(encoded_msg);
  message.value = "";
});
