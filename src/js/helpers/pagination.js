import Pagination from 'tui-pagination';
import { refs } from '../components/refs';

export const createPagination = (itemsPerPage, totalItems, page) => {
  // if (!refs.shopList.children.length) {
  //   refs.paginationBlock.style.display = 'none';
  // }
  const options = {
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    visiblePages: page > 5 ? 5 : page,
    centerAlign: true,
  };
  const pagination = new Pagination(refs.paginationBlock, options);
  if (page > 1) {
    refs.paginationBlock.style.display = 'block';
  } else {
    refs.paginationBlock.style.display = 'none';
  }
  return pagination;
};
