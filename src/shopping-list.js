import './js/components/refs';
import './js/mobileMenu';
import './js/firebase';
import './js/createSupportList';
import './js/createShopList';
import './js/switch';

import Pagination from 'tui-pagination';

const pagination2 = new Pagination(document.getElementById('pagination2'), {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
  centerAlign: true,
});
