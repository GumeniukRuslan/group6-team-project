import { renderSupportList } from './render/renderSupportList';
import { refs } from './components/refs';
import { funds } from './components/support-funds';
import Swiper from 'swiper';
import { swiperOptions } from './components/optionsForSwiper';

function createSupportList() {
  const allFunds = renderSupportList(funds);
  refs.suppList.innerHTML = allFunds;
  const swiper = new Swiper('.support__handler', swiperOptions);
  const button = document.querySelector('.buttons-slider');
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
}
window.addEventListener('load', createSupportList);
