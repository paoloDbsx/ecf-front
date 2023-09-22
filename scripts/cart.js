function addCart(id) {
  let counter = document.querySelector("#counter" + id);
  counter.innerText++;
}

function deleteCart(id) {
  let counter = document.querySelector("#counter" + id);
  if (counter.innerText !== "0") {
    counter.innerText--;
  }
}

function validate() {
  // récupération des données
  let numbers = [];
  let counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    sanitizeCounters(counter);
    numbers.push(counter.innerText);
  });
  let realNumbers = [];
  let i = 0;
  numbers.forEach((number) => {
    if (number > 0) {
      realNumbers.push([number, i]);
    }
    i++;
  });

  let total = 0;

  realNumbers.forEach((realNumber) => {
    ticketsTab.forEach((ticket) => {
      if (ticket.id === realNumber[1] + 1) {
        for (let k = 0; k < realNumber[0]; k++) {
          //   let newTitre = document.createElement("div");
          //   newTitre.classList.add("mesTitresSeul");
          //   let hr = document.createElement("hr");
          //   newTitre.innerHTML =
          //     `<div class="mesTitres-img"><div/>
          //     <p>` +
          //     ticket.title +
          //     `</p>`;
          //   MesTitresReels.appendChild(newTitre);
          //   MesTitresReels.appendChild(hr);
        }
        total += realNumber[0] * ticket.price;
      }
    });
  });
  total = total.toString();
  total = total.slice(0, -2) + "," + total.slice(-2);
  if (total === ",0") {
    total = "0";
  }
  alert("Coût total : " + total + " €");
  initializeCounters(counters);
}

// fonctions pour la validation
function initializeCounters(counters) {
  counters.forEach((counter) => {
    counter.innerText = "0";
  });
}
function sanitizeCounters(counter) {
  if (counter.innerText < 0 || !Number.isInteger(parseInt(counter.innerText))) {
    counter.innerText = 0;
  }
}
