// Date et temps
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDate();
let dayName = date.getDay();
let month = date.getMonth();

if (minutes < 10) {
  minutes = "0" + minutes;
}
if (hours < 10) {
  hours = "0" + hours;
}
if (day < 10) {
  day = "0" + day;
}

switch (dayName) {
  case 1:
    dayName = "Lundi";
    break;
  case 2:
    dayName = "Mardi";
    break;
  case 3:
    dayName = "Mercredi";
    break;
  case 4:
    dayName = "Jeudi";
    break;
  case 5:
    dayName = "Vendredi";
    break;
  case 6:
    dayName = "Samedi";
    break;
  default:
    dayName = "Dimanche";
    break;
}

switch (month) {
  case 0:
    month = "Janvier";
    break;
  case 1:
    month = "Février";
    break;
  case 2:
    month = "Mars";
    break;
  case 3:
    month = "Avril";
    break;
  case 4:
    month = "Mai";
    break;
  case 5:
    month = "Juin";
    break;
  case 6:
    month = "Juillet";
    break;
  case 7:
    month = "Août";
    break;
  case 8:
    month = "Septembre";
    break;
  case 9:
    month = "Octobre";
    break;
  case 10:
    month = "Novembre";
    break;
  default:
    month = "Décembre";
    break;
}

let time = hours + " : " + minutes;

let spanTime = document.querySelector("#time");
spanTime.innerText = time;

// Intro redirection
function introRedirection() {
  document.location.href = "http://127.0.0.1:5500/views/app.html";
}
