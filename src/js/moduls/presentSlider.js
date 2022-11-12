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
      new Swiper(slider.querySelector('.swiper'), {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true, 
        modules: [Navigation, Pagination, EffectFade],
        navigation: {
          nextEl: '.js-present-slider .next',
          prevEl: '.js-present-slider .prev'
        },
        pagination: {
          el: '.js-present-slider .swiper__pagination',
          type: 'fraction',
          formatFractionCurrent: function (n) {
            return (n < 10 ? '0' : '') + n;
          },
          formatFractionTotal: function (n) {
            return (n < 10 ? '0' : '') + n;
          }
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading");
            swiper.updateAutoHeight();
          },
        },
      });
    });
  }