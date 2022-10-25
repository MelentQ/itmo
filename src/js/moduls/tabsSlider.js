import {
    Swiper,
    Controller,
    EffectFade,
    Thumbs
  } from 'swiper';


  export default function tabsSlider() {
      const tabsSlider = document.querySelectorAll('.content-simple__sliders');
      if(!tabsSlider) return;

      tabsSlider.forEach(slider => {
        const tabsSwiper = new Swiper(slider.querySelector('.content-simple__top-swiper'), {
          speed: 500,
          slidesPerView: "auto",
          watchSlidesProgress: true,
          spaceBetween: 10,
          on: {
            touchEnd: function(s,e) {
              let range = 5;
              let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                  - s.touches.startY;
              if (diff < range || diff > -range) s.allowClick = true;
            },
            init: function (swiper) {
              swiper.el.classList.remove("loading")
            },
          }
        });

        const contentSwiper = new Swiper(slider.querySelector('.content-simple__footer-swiper'), {
          speed: 500,
          slidesPerView: 1,
          spaceBetween: 0,
          modules: [ EffectFade, Thumbs],
          autoHeight: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          thumbs: {
            swiper: tabsSwiper
          },
          on: {
            init: function (swiper) {
              swiper.el.classList.remove("loading")
            },
          }
        });

    });
  }