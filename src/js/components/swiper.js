import Swiper, { Pagination, Navigation, Scrollbar } from 'swiper';
Swiper.use([Pagination, Navigation, Scrollbar]);
import { renderSupportList } from '../render/renderSupportList';

/*const supportList = document.getElementById('support-list');
supportList.innerHTML = renderSupportList(data);*/

 
const swiper = new Swiper(".mySwiper", {
      speed:500,
      slidesPerView: 4,
      
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        nextEl: ".swiper-button-next",
      },
      direction: "vertical",
    
 });    
