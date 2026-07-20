const json = '../chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getMembersData(json) {
    const response = await fetch(json)
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    cards.innerHTML = '';
    members.forEach(member => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let portrait = document.createElement('img');
        let number = document.createElement('p');
        let url = document.createElement('p');
        let address = document.createElement('p');
        let membership = document.createElement('p');

        businessName.textContent = member.name;
        number.textContent = `Phone number: ${member.number}`;
        url.textContent = `Website: ${member.url}`;
        address.textContent = `Address: ${member.address}`;
        membership.textContent = `Membership Level: ${member.membershipLevel}`;

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('loading', 'lazy');
        portrait.classList.add('member-img');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '300');
        portrait.setAttribute('alt', `Image of ${member.name}`);

        card.classList.add('card-container');

        card.appendChild(businessName);
        card.appendChild(portrait);
        card.appendChild(number);
        card.appendChild(url);
        card.appendChild(address);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}

getMembersData(json);

/*-----------aca va lo de las cards para ser list o grid--------------*/
const listButton = document.querySelector('#list');
const gridButton = document.querySelector('#grid');
const cardsFormat = document.querySelector('#cards');

listButton.classList.add('current');

listButton.addEventListener('click', (e) => {
    e.preventDefault()

    listButton.classList.add('current');
    gridButton.classList.remove('current');

    cardsFormat.classList.remove('build-grid');
});

gridButton.addEventListener('click', (e) => {
    e.preventDefault();

    gridButton.classList.add('current');
    listButton.classList.remove('current');

    cardsFormat.classList.add('build-grid');
});
