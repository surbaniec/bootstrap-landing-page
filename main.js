const btn = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
console.log(logo);
btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    logo.classList.toggle('white-color');
})