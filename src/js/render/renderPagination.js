import { createPagination } from '../helpers/pagination';
import { refs } from '../components/refs';
import { removeLoading, startLoading } from '../helpers/spinner';
import { renderShopBookCards } from './renderShopBookCard';
import { scrollToTop } from '../scrollToTop';

export const createLibraryPagination = (data, amount) => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    const pagination = createPagination(amount, Math.ceil(amount / 3));
    pagination.on('beforeMove', ({ page }) => {
      startLoading();
      refs.shopList.innerHTML = renderShopBookCards(
        data.slice(page * 3 - 3, page * 3)
      );
      scrollToTop();
      removeLoading();
    });
    return pagination;
  } else {
    const pagination = createPagination(amount, Math.ceil(amount / 4));
    pagination.on('beforeMove', ({ page }) => {
      startLoading();
      refs.shopList.innerHTML = renderShopBookCards(
        data.slice(page * 4 - 4, page * 4)
      );
      scrollToTop();
      removeLoading();
    });
    return pagination;
  }
};
