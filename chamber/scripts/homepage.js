/*--------------------------------WEATHER--------------------------------------*/
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=4.80&lon=-75.69&units=metric&appid=c91132cc85b697bba4946f16d8ba55d8';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.80&lon=-75.69&units=metric&appid=c91132cc85b697bba4946f16d8ba55d8';

async function apiFetch() {
  try {
    const responseCurrent = await fetch(urlCurrent);
    if (responseCurrent.ok) {
      const dataCurrent = await responseCurrent.json();
      displayResults(dataCurrent);
    }
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
      displayForecast(dataForecast);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  forecastContainer.innerHTML = '';

  const threeDayForecast = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

  threeDayForecast.forEach(day => {
    
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

    const li = document.createElement('li');
    li.innerHTML = `<strong>${dayName}:</strong> ${day.main.temp}&deg;C`;
    forecastContainer.appendChild(li);
  });
}

apiFetch();
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
      levelP.textContent = 'Gold Member';
    } else if (member.membershipLevel === 2) {
      levelP.textContent = 'Silver Member';
    }

    const addressP = document.createElement('p');
    addressP.textContent = `Address: ${member.address}`;

    const phoneP = document.createElement('p');
    phoneP.textContent = `Phone: ${member.number}`;

    const link = document.createElement('a');
    link.setAttribute('href', member.url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.textContent = 'Visit Website';

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(levelP);
    card.appendChild(addressP);
    card.appendChild(phoneP);
    card.appendChild(link);

    spotlightsContainer.appendChild(card);
  });
}
getSpotlights();