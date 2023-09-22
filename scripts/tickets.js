// Tickets
let allTickets = document.querySelector(".allTickets");
ticketsTab.forEach((ticket) => {
  // Affichage des tickets
  let newTicket = document.createElement("div");
  let hr = document.createElement("hr");
  let price = ticket.price.toString();
  price = price.slice(0, -2) + "," + price.slice(-2);

  newTicket.classList.add("acheterTicket");
  newTicket.innerHTML =
    `
   <img
   src="../images/nav/black-tickets.png"
   alt=""
   class="acheter-img"
 />
 <div class="acheterAll" id="test">
   <div class="acheterFirst">
     <span class="acheterTitle">` +
    ticket.title +
    `</span>
     <div class="acheterAdd">
     <button class="buttonCart" id="delete` +
    ticket.id +
    `"  onclick="deleteCart(` +
    ticket.id +
    `)">-</button>
     <span id="counter` +
    ticket.id +
    `" class="counter">0</span>
     <button class="buttonCart" onclick="addCart(` +
    ticket.id +
    `)">+</button>
   </div>
     </div>
   <div class="acheterSecond">
     <p class="acheterDescription">` +
    ticket.description +
    `</p>
     <span class="acheterPrice">` +
    price +
    " €" +
    `</span>
   </div>
 </div>
   `;
  allTickets.appendChild(newTicket);
  allTickets.appendChild(hr);
});
