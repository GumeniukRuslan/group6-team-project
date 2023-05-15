import { createPagination } from '../helpers/pagination';
import { refs } from '../components/refs';
import { removeLoading, startLoading } from '../helpers/spinner';
import { renderShopBookCards } from './renderShopBookCard';

export const createLibraryPagination = (data, amount) => {
  const pagination = createPagination(4, amount, Math.ceil(amount / 4));
  pagination.on('beforeMove', ({ page }) => {
    startLoading();
    refs.shopList.innerHTML = renderShopBookCards(
      data.slice(page * 4 - 4, page * 4)
    );
    removeLoading();
  });
  return pagination;
};
