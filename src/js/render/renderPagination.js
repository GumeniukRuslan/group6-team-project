import { createPagination } from '../helpers/pagination';
import { refs } from '../components/refs';
import { removeLoading, startLoading } from '../helpers/spinner';
import { renderShopBookCards } from './renderShopBookCard';

export const createLibraryPagination = (data, amount) => {
  const pagination = createPagination(3, amount, Math.ceil(amount / 3));
  pagination.on('beforeMove', ({ page }) => {
    startLoading();
    refs.shopList.innerHTML = renderShopBookCards(
      data.slice(page * 3 - 3, page * 3)
    );
    removeLoading();
  });
  return pagination;
};
