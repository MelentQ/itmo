import {
  Swiper,
  Navigation
} from 'swiper';

export default function partnersSlider() {
  const partnersSlider = document.querySelectorAll('.partners__slider');
  partnersSlider.forEach(slider => {
    new Swiper(slider.querySelector('.partners__swiper'), {
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 15,
      modules: [Navigation],
      breakpoints: {
        360: {
          slidesPerView: 3,
        },
        460: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 7,
        },
        1200: {
          slidesPerView: 8,
        }
      },
      navigation: {
        nextEl: '.partners__slider .next',
        prevEl: '.partners__slider .prev'
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });
  });
}