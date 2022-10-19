import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Controller
} from 'swiper';
import HystModal from './HystModal';
import Forms from './Forms';
import {
  Map
} from './Map';
import debug from './utils/debug';
import mobileSlider from './moduls/mobileSlider';
import Accordions from './Accordions';

document.addEventListener('DOMContentLoaded', function () {
  window.itmo = {}; // Тут будут лежать всякие функции с фронта

  // document.header = document.querySelector('.header');

  modals();
  forms();
  maps();
  debug(); // Нажми 5 раз "d" на клавиатуре
  accordions();
  searchFields();
  miniSliders();
  ordinarySlider();
  contentSliders();


});

function modals() {
  new HystModal({
    beforeOpen: instance => {
      // const target = instance.starter;
      //
      // if (target.classList.contains('js-reset-by-modal')) {
      //     const form = target.closest('form');
      //     form && form.reset();
      // }
    }
  });
}

function forms() {
  new Forms({
    onSuccess: (form, response) => {
      modals.open('#success');
    },
    onError: (form, response) => {
      modals.open('#error');
    }
  });
}

function maps() {
  ymaps.ready(() => {
    [...document.querySelectorAll('.js-map')].forEach(map => {
      const instance = new Map(map, {
        icon: {
          url: 'img/placemark.svg'
        }
      });
      instance.addPlace([55.76, 37.64]);
    });
  });
}

function accordions() {
  new Accordions({
    selectors: {
      container: '.js-footer-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}

function miniSliders() {
  const miniSliders = document.querySelectorAll('.js-mini-slider');
  miniSliders.forEach(slider => {
    new Swiper(slider.querySelector('.swiper'), {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      navigation: {
        nextEl: '.js-mini-slider .next',
        prevEl: '.js-mini-slider .prev'
      },
      pagination: {
        el: '.js-mini-slider .mini-slider__pagination',
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

function contentSliders() {
  const contentSliders = document.querySelectorAll('.content-slider__slider');
  contentSliders.forEach(slider => {
    const contentSwiper = new Swiper(slider.querySelector('.content-swiper'), {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Navigation, Pagination, EffectFade, Controller],
      breakpoints: {
        768: {
          slidesPerView: 1.2,
        }
      },
      navigation: {
        nextEl: '.content-slider__slider .next',
        prevEl: '.content-slider__slider .prev'
      },
      pagination: {
        el: '.content-slider__slider .content-slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass) {
          return '<span class="' + currentClass + '"></span>'
        },
        formatFractionCurrent: function (n) {
          return (n < 10 ? '0' : '') + n;
        }
      },
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
    });

    const sliderText = new Swiper(slider.querySelector('.content-slider__text-block'), {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [ EffectFade, Controller],
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });

    contentSwiper.controller.control = sliderText;
    sliderText.controller.control = contentSwiper;

  });
}



function ordinarySlider() {
  const ordinarySlider = document.querySelectorAll('.cards-main__slider');
  ordinarySlider.forEach(slider => {
    new Swiper(slider.querySelector('.ordinary-slider'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [Navigation],
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.cards-main__slider .next',
        prevEl: '.cards-main__slider .prev'
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });
  });
}

function searchFields() {
  const containers = document.querySelectorAll('.js-search');

  containers.forEach(container => {
    const openButton = container.querySelector('.search-field__button--open');
    const closeButton = container.querySelector('.search-field__button--close');
    const input = container.querySelector('.search-field__element');

    openButton.addEventListener('click', () => {
      document.body.classList.add('js-search-filed-opened');
      container.classList.add('active');
      openButton.setAttribute('disabled', 'true');
      closeButton.removeAttribute('disabled');
      input.focus();
    });
    closeButton.addEventListener('click', () => {
      container.classList.remove('active');
      document.body.classList.remove('js-search-filed-opened');
      openButton.removeAttribute('disabled');
      closeButton.setAttribute('disabled', 'true');
    });
  });
}
