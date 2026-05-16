document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const navbutton = document.querySelector('#ham-btn');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});
