/*-------------------------------SPOTLIGHTS------------------------------------------*/
const spotlightsContainer = document.querySelector('#spotlights-container');
const membersUrl = 'data/members.json';

async function getSpotlights() {
  try {
    const response = await fetch(membersUrl);
    if (response.ok) {
      const data = await response.json();
      displaySpotlights(data.members);
    }
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

function displaySpotlights(members) {
  if (!spotlightsContainer) return;
  spotlightsContainer.innerHTML = '';

  const qualifiedMembers = members.filter(
    member => member.membershipLevel === 2 || member.membershipLevel === 3);

  const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

  const selectedMembers = shuffled.slice(0, 3);

  selectedMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');

    const img = document.createElement('img');
    img.setAttribute('src', member.image);
    img.setAttribute('alt', member.name);
    img.setAttribute('loading', 'lazy');

    const h3 = document.createElement('h3');
    h3.textContent = member.name;

    const levelP = document.createElement('p');
    levelP.classList.add('membership-level');
    if (member.membershipLevel === 3) {
      levelP.textContent = 'Tier S';
    } else if (member.membershipLevel === 2) {
      levelP.textContent = 'Tier A';
    }

    const phoneP = document.createElement('p');
    phoneP.textContent = `Phone: ${member.number}`;

    const link = document.createElement('a');
    link.setAttribute('href', member.url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.textContent = 'Social Media';

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(levelP);
    card.appendChild(phoneP);
    card.appendChild(link);

    spotlightsContainer.appendChild(card);
  });
}
getSpotlights();