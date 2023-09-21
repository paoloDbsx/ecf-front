// Tickets
fetch("../tickets.json")
  .then((response) => response.json())
  .then((data) => {
    data["tickets"].forEach((ticket) => {
      let newTicket = document.createElement("div");
      let hr = document.createElement("hr");
      newTicket.classList.add("acheterTicket");
      newTicket.innerHTML =
        `
      <img
      src="../images/nav/black-tickets.png"
      alt=""
      class="acheter-img"
    />
    <div class="acheterAll">
      <div class="acheterFirst">
        <span class="acheterTitle">` +
        ticket.title +
        `</span>
        <div class="acheterAdd">
          <button class="buttonCart" id="add` +
        ticket.id +
        `">-</button><span>0</span><button class="buttonCart" id="delete` +
        ticket.id +
        `">+</button>
        </div>
      </div>
      <div class="acheterSecond">
        <p class="acheterDescription">` +
        ticket.description +
        `</p>
        <span class="acheterPrice">` +
        ticket.price +
        " €" +
        `</span>
      </div>
    </div>
      `;
      acheterDiv.appendChild(newTicket);
      acheterDiv.appendChild(hr);
    });
  });
