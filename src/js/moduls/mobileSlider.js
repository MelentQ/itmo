import {
    Swiper,
  } from 'swiper';

export default function mobileSlider() {
    let mql = window.matchMedia('(max-width: 768px)');
    console.log(mql.matches, "mql");
    if (mql.matches && document.querySelector('.js-mobile-slider')) {
        new Swiper('.js-mobile-slider', {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
            },
            on: {
            init: function (swiper) {
                swiper.el.classList.remove("loading")
            },
            }
        })
    }  
}