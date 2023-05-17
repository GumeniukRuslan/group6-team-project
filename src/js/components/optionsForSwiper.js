export const swiperOptions = {
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
      slidesPerView: 6,
    },
  },
};
