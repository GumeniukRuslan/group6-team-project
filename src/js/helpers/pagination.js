import Pagination from 'tui-pagination';
import { refs } from '../components/refs';

export const createPagination = (itemsPerPage, totalItems, page) => {
  const options = {
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    visiblePages: page > 3 ? 3 : page,
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
