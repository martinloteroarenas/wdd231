
const navbutton = document.querySelector('#ham-btn');
const mainNav = document.querySelector('#hide-menu');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    mainNav.classList.toggle('show-menu');
});
