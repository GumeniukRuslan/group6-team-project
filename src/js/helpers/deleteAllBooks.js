import { rmvAllFrmShopList } from '../firebase';
import { removeLoading, startLoading } from './spinner';
import { refs } from '../components/refs';
import { renderErrorShopList } from '../render/renderError';

export async function deleteAllBooks() {
  startLoading();
  await rmvAllFrmShopList();
  refs.paginationBlock.style.display = 'none';
  refs.deleteAllBtn.classList.add('hidden');
  refs.shopList.innerHTML = renderErrorShopList(
    `This page is empty, add some books and proceed to order.`
  );
  removeLoading();
}
