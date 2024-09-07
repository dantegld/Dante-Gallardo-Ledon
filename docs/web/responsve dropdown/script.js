// JavaScript code for toggling the navigation menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
});