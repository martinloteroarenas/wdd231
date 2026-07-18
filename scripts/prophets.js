const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json')
    const data = await response.json();

    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {
  cards.innerHTML = '';
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2')
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy'); // Carga diferida
    portrait.setAttribute('width', '340');    // Dimensiones recomendadas
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
});
}

getProphetData();