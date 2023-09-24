let mesTitresImg = document.querySelector(".mesTitres-img");
let validerTitre = document.querySelector("#validerTitre");
let Timer = document.querySelector("#timer");
let finTimer = document.querySelector(".finTimer");

function timer() {
  mesTitresImg.style.backgroundImage = "url('../images/ticket.jpg')";
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
      clearInterval(setIntervalId);
    }
  }, 10);
}

mesTitresImg.addEventListener("click", () => {
  mesTitresImg.style.backgroundImage = "url('../images/ticket-hover.png')";
  validerTitre.classList.add("validerTitre");
  MesTitresReels.style.height = "56vh";
});
