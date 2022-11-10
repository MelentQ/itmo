import {
    Swiper,
    Navigation
  } from 'swiper';
  
  export default function oneSlideSlider() {
    const oneSlideSlider = document.querySelectorAll('.js-one-slide');
    oneSlideSlider.forEach(slider => {
      new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 20,
        modules: [Navigation],
        navigation: {
          nextEl: '.js-one-slide .next',
          prevEl: '.js-one-slide .prev'
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });
    });
  }