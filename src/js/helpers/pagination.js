import Pagination from 'tui-pagination';
import { refs } from '../components/refs';

export const createPagination = (totalItems, page) => {
  let options;
  if (window.matchMedia('(min-width: 768px)').matches) {
    options = {
      itemsPerPage: 3,
      totalItems: totalItems,
      visiblePages: page > 3 ? 3 : page,
      centerAlign: true,
    };
  } else {
    options = {
      itemsPerPage: 4,
      totalItems: totalItems,
      visiblePages: page > 2 ? 2 : page,
      centerAlign: true,
    };
  }
  const pagination = new Pagination(refs.paginationBlock, options);
  if (page > 1) {
    refs.paginationBlock.style.display = 'flex';
  } else {
    refs.paginationBlock.style.display = 'none';
  }
  return pagination;
};
