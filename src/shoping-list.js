import Pagination from 'tui-pagination';

const pagination2 = new Pagination(document.getElementById('pagination2'), {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
  centerAlign: true,
});
