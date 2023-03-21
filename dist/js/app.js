const preloader = document.querySelector('.preloader');
const burgerEl = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');


burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--open');
    headerNav.classList.toggle('header__nav--open');
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        preloader.classList.add('preloader--hidden')
    }, 3000)
})