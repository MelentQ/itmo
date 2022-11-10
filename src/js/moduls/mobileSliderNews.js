import {
    Swiper,
  } from 'swiper';

export default function mobileSliderNews() {
    const container = document.querySelector('.js-mobile-sliderNews');
    if (!container) return;

    const spaceBetween = container.dataset.space ? Number(container.dataset.space) : 20;

    let mql = window.matchMedia('(max-width: 1024px)');
    if (mql.matches) {
        new Swiper(container, {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: spaceBetween,
            autoHeight: true,
            breakpoints: {
                640: {
                  slidesPerView: 2,
                }
              },
            on: {
                init: function (swiper) {
                    swiper.el.classList.remove("loading")
                },
            }
        })
    }  else {
        container.classList.remove('loading')
    }
}