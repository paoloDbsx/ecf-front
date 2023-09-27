// fonctions pour la validation
function initializeCounters(counters) {
  counters.forEach((counter) => {
    counter.innerText = 0;
  });
}
function sanitizeCounters(counter) {
  if (counter.innerText < 0 || !Number.isInteger(parseInt(counter.innerText))) {
    counter.innerText = 0;
  }
}

// mise à jour du total pour les bouttons
function totalUpdate() {
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
        total += realNumber[0] * ticket.price;
      }
    });
  });

  let buy = document.querySelector("#buy");
  let buySpan = document.querySelector(".buySpan");
  if (total > 0) {
    total = total.toString();
    total = total.slice(0, -2) + "," + total.slice(-2);
    if (total === ",0") {
      total = "0";
    }

    buySpan.innerText = "Total : " + total + " €";
    buy.classList.add("buy");
    allTickets.style.height = "56vh";
  } else {
    buy.classList.remove("buy");
    allTickets.style.height = "72vh";
  }
}

// boutons
function addCart(id) {
  let counter = document.querySelector("#counter" + id);
  counter.innerText++;
  totalUpdate();
}

function deleteCart(id) {
  let counter = document.querySelector("#counter" + id);
  if (counter.innerText !== "0") {
    counter.innerText--;
    totalUpdate();
  }
}

// valider le panier
let paiementCart = document.querySelector(".paiementCart");

function validate() {
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
        let newPaiementCart = document.createElement("div");
        price = ticket.price.toString();
        price = price.slice(0, -2) + "," + price.slice(-2);
        newPaiementCart.innerHTML =
          `
          <div class="newPaiementCart">
          <span>` +
          ticket.title +
          `</span><span>` +
          realNumber[0] +
          " x " +
          price +
          " €" +
          `</span>
        </div>
          `;
        paiementCart.appendChild(newPaiementCart);
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

  h2.innerText = "Paiement";
  footer.classList.add("hidden");
  paiementDiv.classList.add("paiement-div");
  acheterDiv.classList.remove("acheter-div");

  let paiementTotal = document.querySelector("#paiementTotal");
  paiementTotal.innerText = total + " €";
}

// valider le paiement
function validatePaiement() {
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
        total += realNumber[0] * ticket.price;
      }
    });
  });

  total = total.toString();
  total = total.slice(0, -2) + "," + total.slice(-2);
  if (total === ",0") {
    total = "0";
  }

  let montant = document.querySelector(".montant");
  montant.innerText = "Montant : " + total + " EUR";

  paiementDiv.classList.remove("paiement-div");
  bancaireDiv.classList.add("bancaireDiv");
  footer.classList.remove("hidden");
  footer.style.height = "24vh";
  nav.classList.add("hidden");
  bacnaireFooter.classList.add("bancaireFooter");
}

let conditions = document.querySelector("#conditions");
let payerButton = document.querySelector("#payerButton");

conditions.addEventListener("change", () => {
  if (conditions.checked) {
    payerButton.onclick = validatePaiement;
    payerButton.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  } else {
    payerButton.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    payerButton.onclick = null;
  }
});

// payer
function pay() {
  let numbers = [];
  let counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
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

  realNumbers.forEach((realNumber) => {
    ticketsTab.forEach((ticket) => {
      if (ticket.id === realNumber[1] + 1) {
        for (let k = 0; k < realNumber[0]; k++) {
          let newTitre = document.createElement("div");
          newTitre.classList.add("mesTitresSeul");
          let hr = document.createElement("hr");
          newTitre.innerHTML =
            `
      <div class="mesTitres-img">
      <div class="hidden" id="timer">
        <span class="fin">Fin de validité :</span>
        <span class="finTimer"></span>
      </div>
    </div>
    <span>` +
            ticket.title +
            `</span>
    `;
          MesTitresReels.appendChild(newTitre);
          MesTitresReels.appendChild(hr);
        }
      }
    });
  });

  allTickets.style.height = "72vh";
  bancaireDiv.classList.remove("bancaireDiv");
  initializeCounters(counters);
  paiementCart.innerHTML = "";
  h2.innerText = "Mes Titres";
  footer.style.height = "14vh";
  mesTitresDiv.classList.add("mesTitres-div");
  nav.classList.remove("hidden");
  bacnaireFooter.classList.remove("bancaireFooter");
  buy.classList.remove("buy");
  mesTitresIcon.src = "../images/nav/black-tickets.png";
  acheterIcon.src = "../images/nav/cart.png";
}
