// Time
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}
if (hours < 10) {
  hours = "0" + hours;
}

let time = hours + " : " + minutes;

let spanTime = document.querySelector("#time");
spanTime.innerText = time;

// Intro redirection
function introRedirection() {
  document.location.href = "http://127.0.0.1:5500/views/app.html";
}
