// Navigation
let h2 = document.querySelector("#title");
let footer = document.querySelector("#footer");

// Navigation-items
let mesTitres = document.querySelector("#mesTitres");
let acheter = document.querySelector("#acheter");
let menu = document.querySelector("#menu");

// Navigation-icons
let mesTitresIcon = document.querySelector("#mesTitres-icon");
let acheterIcon = document.querySelector("#acheter-icon");
let menuIcon = document.querySelector("#menu-icon");

// Page 1 -> première à apparaître
let mesTitresDiv = document.querySelector("#mesTitresDiv");
let MesTitresReels = document.querySelector("#MesTitresReels");
let pasDeTitres = document.querySelector("#pasDeTitres");
mesTitresDiv.classList.add("mesTitres-div");
if (MesTitresReels.innerText === "") {
  pasDeTitres.classList.add("pasDeTitres");
}
h2.innerText = "Mes titres";

// Page 2
let acheterDiv = document.querySelector("#acheterDiv");

// Page 3
let menuDiv = document.querySelector("#menuDiv");

// Page paiement
let paiementDiv = document.querySelector("#paiementDiv");

// AddEventListener('click')
mesTitres.addEventListener("click", () => {
  mesTitresIcon.src = "../images/nav/black-tickets.png";
  acheterIcon.src = "../images/nav/cart.png";
  menuIcon.src = "../images/nav/menu.png";
  h2.innerText = "Mes titres";
  mesTitresDiv.classList.add("mesTitres-div");
  if (MesTitresReels.innerText === "") {
    pasDeTitres.classList.add("pasDeTitres");
  }
  acheterDiv.classList.remove("acheter-div");
  menuDiv.classList.remove("menu-div");
});
acheter.addEventListener("click", () => {
  mesTitresIcon.src = "../images/nav/tickets.png";
  acheterIcon.src = "../images/nav/black-cart.png";
  menuIcon.src = "../images/nav/menu.png";
  h2.innerText = "Acheter";
  mesTitresDiv.classList.remove("mesTitres-div");
  pasDeTitres.classList.remove("pasDeTitres");
  acheterDiv.classList.add("acheter-div");
  menuDiv.classList.remove("menu-div");
});
menu.addEventListener("click", () => {
  mesTitresIcon.src = "../images/nav/tickets.png";
  acheterIcon.src = "../images/nav/cart.png";
  menuIcon.src = "../images/nav/black-menu.png";
  h2.innerText = "Menu";
  mesTitresDiv.classList.remove("mesTitres-div");
  pasDeTitres.classList.remove("pasDeTitres");
  acheterDiv.classList.remove("acheter-div");
  menuDiv.classList.add("menu-div");
});
