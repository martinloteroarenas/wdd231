/*-------------------------TARJETAS---------------------------*/
import discoverData from '/final-project/data/items.mjs';

/*---------------------message---------------------*/
const messageElement = document.getElementById("visitor-message");
const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisitDate");
const msPerDay = 86400000;

if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";

} else {
    const timeDifference = currentVisit - Number(lastVisit);
    const daysDifference = Math.floor(timeDifference / msPerDay);

    if (timeDifference < msPerDay) {
        messageElement.textContent = "Back so soon! Awesome!";

    } else {
        const dayWord = daysDifference === 1 ? "day" : "days";
        messageElement.textContent = `You last visited ${daysDifference} ${dayWord} ago.`;
    }
}

localStorage.setItem("lastVisitDate", currentVisit);

/*-------------------------TARJETAS---------------------------*/
const cardsContainer = document.getElementById("discover-cards");

function displayItems(items) {
    if (!cardsContainer) return;

    cardsContainer.innerHTML = "";

    items.forEach((item, index) => {
        const card = document.createElement("section");
        card.classList.add("card", `card${index + 1}`);

        const heading = document.createElement("h2");
        heading.textContent = item.title;

        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.src = item.photo;
        image.alt = item.title;
        image.loading = "lazy";
        figure.appendChild(image);

        const address = document.createElement("address");
        address.textContent = `Address: ${item.address}`;

        const description = document.createElement("p");
        description.textContent = item.description;

        const button = document.createElement("a");
        button.href = item.url;
        button.textContent = "View the full set";
        button.target = "_blank";
        button.rel = "noopener noreferrer";

        card.appendChild(heading);
        card.appendChild(figure);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        cardsContainer.appendChild(card);
    });
}
displayItems(discoverData.items);