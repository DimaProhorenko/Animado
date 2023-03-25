const preloader = document.querySelector('.preloader');
const burgerEl = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const productSwiper = new Swiper('.product__slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 1000,
    },
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 20,
      breakpoints: {
        720: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    }
});

const reviewSwiper = new Swiper('.review__swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2000
    },
    spaceBetween: 20,
    breakpoints: {
        720: {
            slidesPerView: 2,
        }
    }
})


burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--open');
    headerNav.classList.toggle('header__nav--open');
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        preloader.classList.add('preloader--hidden')
    }, 3000)
})