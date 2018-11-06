function sayHello() {
  var p = document.getElementById("hello");
  p.innerHTML = "hello, World!";

}
 function helloPopup() {
   var p = document.getElementById("popup");
   p.innerHTML = alert("hello, world!");
   p.innerHTML = " "
 }
 function button() {
   var p = document.getElementById("console");
   p.innerHTML = console.log("hello, console!");
   p.innerHTML = " "
 }
 function heystranger() {
   var person = prompt("why dont you tell me your name", "");
   var p = document.getElementById("hey").innerHTML =
        "Hello " + person + ", how are you today?";
 }
