import {
    Swiper,
    Navigation
  } from 'swiper';
  
  export default function singleSlider() {
    const singleSlider = document.querySelectorAll('.quote-single__slider');
    singleSlider.forEach(slider => {
      new Swiper(slider.querySelector('.quote-single__swiper'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 50,
        modules: [Navigation],
        navigation: {
          nextEl: '.quote-single__slider .next',
          prevEl: '.quote-single__slider .prev'
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });
    });
  }