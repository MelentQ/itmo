import {
    Swiper,
    Controller
  } from 'swiper';


  export default function tabsSlider() {
      const tabsSlider = document.querySelectorAll('.content-simple__sliders');
      tabsSlider.forEach(slider => {
      const tabsSwiper = new Swiper(slider.querySelector('.content-simple__top-swiper'), {
        speed: 500,
        slidesPerView: 5,
        spaceBetween: 10,
        modules: [ Controller],
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });

      const contentSwiper = new Swiper(slider.querySelector('.content-simple__footer-swiper'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [ Controller],
        autoHeight: true,
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });

      tabsSwiper.controller.control = contentSwiper;
      contentSwiper.controller.control = tabsSwiper;

    });
  }