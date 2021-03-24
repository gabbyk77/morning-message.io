function getTime() {
var today = new Date();
var time = today.getHours();
document.getElementById("hi").innerHTML = today;
}

if (new Date().getHours() >= 6) {
document.getElementById("hi").innerHTML = "Good morning!";
}

if (new Date().getHours() >= 12) {
document.getElementById("hi").innerHTML = "Good afternoon!";
}

if (new Date().getHours() >= 18) {
document.getElementById("hi").innerHTML = "Good evening!";
}

if (new Date().getHours() >= 21) {
document.getElementById("hi").innerHTML = "Good night!";
}

if (new Date().getHours() == 24) {
document.getElementById("hi").innerHTML = "It's a new day";
}

if (new Date().getHours() <= 6) {
document.getElementById("hi").innerHTML = "It's pretty early to be up";
}
