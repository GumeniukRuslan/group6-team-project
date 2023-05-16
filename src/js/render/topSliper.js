// import Swiper from 'swiper';
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper';

const sliderContainerRef = document.querySelector('.swiper-wrapper');

export function renderSlider(data) {
  console.log(data);
  const markup = data
    .map(({ _id, book_image, title, author }) => {
      return `<div class="card swiper-slide" data-book="${_id}">
        <div class="card__thumb">
            <img src="${
              book_image ? book_image : sample
            }" loading="lazy" alt="${title}" class="card__img">
            <div class="card__text">
                <p class="card__text-inner">quick view</p>
            </div>
        </div>
        <h3 class="card__title">${title}</h3>
        <h4 class="card__author">${author}</h4>
    </div>`;
    })
    .join('');

  sliderContainerRef.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    spaceBetween: 75,
    loop: true,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      depth: 70,
      rotate: 8,
      stretch: 50,
      slideShadows: false,
    },
    centeredSlides: true,
    slidesPerView: 6,
    speed: 1000,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 60,
      },

      1440: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  //   const swiper = new Swiper('.swiper', {
  //     modules: [Navigation, Pagination],
  //     direction: 'horizontal',
  //     disableOnInteraction: true,
  //     slidesPerView: 7,
  //     slidesPerGroup: 1,
  //     spaceBetween: 65,
  //     speed: 2500,
  //     // centralSlides: true,
  //     loop: true,
  //     initialSlide: 0,

  //     grabCursor: true,
  //     effect: 'coverflow',
  //     coverflowEffect: {
  //       depth: 70,
  //       rotate: 8,
  //       stretch: 50,
  //       slideShadows: false,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     autoplay: {
  //       delay: 1,
  //       disableOnInteraction: false,
  //       pauseOnMouseEnter: true,
  //     },
  //     // freeMode: true,

  //     breakpoints: {
  //       768: {
  //         // loop: true,
  //         slidesPerView: 5,
  //         slidesPerGroup: 1,
  //         spaceBetween: 60,
  //         disableOnInteraction: true,
  //         navigation: {
  //           enabled: true,
  //         },
  //       },
  //       1440: {
  //         // loop: true,
  //         slidesPerView: 5,
  //         slidesPerGroup: 1,
  //         spaceBetween: 65,
  //         disableOnInteraction: true,
  //         navigation: {
  //           enabled: true,
  //         },
  //       },
  //       1500: {
  //         // loop: true,
  //         slidesPerView: 7,
  //         slidesPerGroup: 1,
  //         spaceBetween: 58,
  //         disableOnInteraction: true,
  //         navigation: {
  //           enabled: true,
  //         },
  //       },
  //     },
  //   });
}
