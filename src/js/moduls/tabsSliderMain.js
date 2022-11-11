import {
    Swiper,
    EffectFade,
    Navigation,
    Thumbs
  } from 'swiper';


  export default function tabsSliderMain() {
      const tabsSliderMain = document.querySelectorAll('.js-tabs-slider-main');
      if(!tabsSliderMain) return;

      tabsSliderMain.forEach(slider => {
        const tabsSwiper = new Swiper(slider.querySelector('.contacts-tabs__tabs'), {
          speed: 500,
          slidesPerView: "auto",
          watchSlidesProgress: true,
          spaceBetween: 0,
          modules: [Navigation],
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: '.js-tabs-slider-main .next',
            prevEl: '.js-tabs-slider-main .prev'
          },
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

        const activeSwiper = new Swiper(slider.querySelector('.contacts-tabs__active'), {
          speed: 500,
          slidesPerView: 1,
          spaceBetween: 0,
          modules: [ EffectFade, Thumbs],
          autoHeight: true,
          effect: 'fade',
          observer: true,
          observeParents: true,
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

        const contents = document.querySelectorAll('.contacts-tabs__tabs-slide');
        contents[0].classList.add('active');

        tabsSwiper.on('slideChange', () => {
          contents.forEach(item => item.classList.remove('active'));
          contents[tabsSwiper.activeIndex] ? contents[tabsSwiper.activeIndex].classList.add('active') : null;
          activeSwiper.slideTo(tabsSwiper.activeIndex)
        })
    });
  }

