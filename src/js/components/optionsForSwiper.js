import { Navigation } from 'swiper';

export const swiperOptions = {
  modules: [Navigation],
  direction: 'vertical',
  loop: true,
  initialSlide: 0,
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  speed: 300,
  navigation: {
    nextEl: '.buttons-slider',
  },
  breakpoints: {
    768: {
      rewind: true,
      slidesPerView: 6,
    }
  }
};