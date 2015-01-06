var ws = new WebSocket("ws://localhost:3000");

var addText = function(msg) {
  var newli = document.createElement("li");
  newli.innerHTML = msg;

  var ul = document.querySelector("ul");
  var firstli = ul.firstChild;
  ul.insertBefore(newli, firstli);
}
ws.addEventListener("open", function(){
  ws.send("hey bro");
});
ws.addEventListener("message", function(evt) {
  var obj = JSON.parse(evt.data);
  console.log(obj);
  var newmsg = obj.name + ": " + obj.msg;
  addText(newmsg);
  var blank = function(){
    document.getElementById('msg').value='';
  }
  blank();
})


document.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 13){
    var text = document.querySelector('#msg').value;
    var name = document.querySelector('#name').value;
    // addText(text);
    var obj = {}
    obj.name = name;
    obj.msg = text;
    var json = JSON.stringify(obj);
    ws.send(json);
  }
})
