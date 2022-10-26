import {
    Swiper,
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';

export default function presentSlider() {
    const presentSlider = document.querySelectorAll('.js-present-slider');
    presentSlider.forEach(slider => {
      new Swiper(slider.querySelector('.cards-presentation__swiper'), {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Navigation, Pagination, EffectFade],
        navigation: {
          nextEl: '.js-present-slider .next',
          prevEl: '.js-present-slider .prev'
        },
        pagination: {
          el: '.js-present-slider .cards-presentation__swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (n) {
            return (n < 10 ? '0' : '') + n;
          },
          formatFractionTotal: function (n) {
            return (n < 10 ? '0' : '') + n;
          }
        },
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true
        // },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        },
      });
    });
  }