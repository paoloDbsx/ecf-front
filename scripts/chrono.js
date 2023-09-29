// lance le timer
function timer() {
  let mesTitresSeul = document.querySelectorAll(".mesTitresSeul");
  let mesTitresImg = document.querySelector(".mesTitres-img");
  let validerTitre = document.querySelector("#validerTitre");
  let Timer = document.querySelector("#timer");
  let finTimer = document.querySelector(".finTimer");
  let startDate = document.querySelector(".date");

  startDate.innerText =
    "(validé le " + dayName + " " + day + " " + month + " à " + time + ")";

  spanTime.innerText = "";
  mesTitresImg.style.backgroundImage = "url('../images/ticket.jpg')";
  mesTitresImg.onclick = null;
  validerTitre.classList.remove("validerTitre");
  MesTitresReels.style.height = "72vh";
  Timer.classList.add("timer");

  // timer
  let timerHours = 0;
  let timerMinutes = 60;
  let timerSeconds = 0;

  let setIntervalId = setInterval(() => {
    if (timerSeconds === 0) {
      timerSeconds = 59;
      if (timerMinutes === 0) {
        timerMinutes = 59;
        if (timerHours === 0) {
        }
        timerHours--;
      } else {
        timerMinutes--;
      }
    } else {
      timerSeconds--;
    }

    let realTimerHours;
    let realTimerMinutes;
    let realTimerSeconds;
    if (timerHours < 10) {
      realTimerHours = "0" + timerHours;
    } else {
      realTimerHours = timerHours;
    }
    if (timerMinutes < 10) {
      realTimerMinutes = "0" + timerMinutes;
    } else {
      realTimerMinutes = timerMinutes;
    }
    if (timerSeconds < 10) {
      realTimerSeconds = "0" + timerSeconds;
    } else {
      realTimerSeconds = timerSeconds;
    }
    finTimer.innerText =
      realTimerHours + ":" + realTimerMinutes + ":" + realTimerSeconds;
    if (finTimer.innerText === "00:00:00") {
      mesTitresSeul[0].remove();
      mesTitresImg.onclick = selectTicket;
      if (MesTitresReels.innerText === "") {
        pasDeTitres.classList.add("pasDeTitres");
      }
      clearInterval(setIntervalId);
    }
  }, 1);
}

// sélectionne un ticket
function selectTicket() {
  let mesTitresImg = document.querySelector(".mesTitres-img");
  let validerTitre = document.querySelector("#validerTitre");

  mesTitresImg.style.backgroundImage = "url('../images/ticket-hover.png')";
  validerTitre.classList.add("validerTitre");
  MesTitresReels.style.height = "56vh";
}
