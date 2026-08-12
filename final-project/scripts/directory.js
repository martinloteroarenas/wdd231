const json = '../final-project/data/members.json';

const cards = document.querySelector('#cards');

async function getMembersData(json) {
    const response = await fetch(json);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    cards.innerHTML = '';
    members.forEach((member, index) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let portrait = document.createElement('img');
        let number = document.createElement('p');
        let url = document.createElement('a'); 
        let membership = document.createElement('p');

        businessName.textContent = member.name;
        number.textContent = `Phone number: ${member.number}`;
        
        url.textContent = 'social media';
        url.setAttribute('href', member.url);
        url.classList.add('instagram');
        url.setAttribute('target', '_blank');
        url.setAttribute('rel', 'noopener noreferrer');

        let tierLabel = '';
        if (member.membershipLevel === 3) {
            tierLabel = 'Tier S';
        } else if (member.membershipLevel === 2) {
            tierLabel = 'Tier A';
        } else if (member.membershipLevel === 1) {
            tierLabel = 'Tier B';
        } else {
            tierLabel = 'Unknown';
        }

        membership.textContent = `Qualification: ${tierLabel}`;

        portrait.setAttribute('src', member.image);
        if (index === 0) {
            portrait.setAttribute('fetchpriority', 'high');
            portrait.setAttribute('loading', 'eager');
        }
        else {
            portrait.setAttribute('loading', 'lazy');
        }
        portrait.classList.add('member-img');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '300');
        portrait.setAttribute('alt', `Image of ${member.name}`);

        card.classList.add('card-container');

        card.appendChild(businessName);
        card.appendChild(portrait);
        card.appendChild(number);
        card.appendChild(membership);
        card.appendChild(url);


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
