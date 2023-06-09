import { refs } from '../components/refs';
import { rmvFrmShopList } from '../firebase';
import { getBksFrmShpLst } from '../firebase';
import { renderError } from '../render/renderError';
import { storagePaginationHolder } from '../createShopList';
import { renderShopBookCards } from '../render/renderShopBookCard';
import { removeLoading, startLoading } from './spinner';
import { renderError } from '../render/renderError';
import { getBksFrmShpLst } from '../firebase';
import { createLibraryPagination } from '../render/renderPagination';
import { handlePromiseArray } from '../createShopList';

let storagePaginationHolderAfter;

export async function deleteBook(evt) {
  if (!evt.target.closest('.delete-btn')) {
    return;
  }
  startLoading();
  refs.shopList.removeChild(evt.target.closest('.shopping-list_book'));
  await rmvFrmShopList(evt);
  try {
    let currentPage;
    if (!storagePaginationHolderAfter) {
      currentPage = storagePaginationHolder.getCurrentPage();
    } else {
      currentPage = storagePaginationHolderAfter.getCurrentPage();
    }

    const data = await getBksFrmShpLst();
    const arrOfBooks = await handlePromiseArray(data);
    console.log();
    if (!arrOfBooks.length) {
      throw new Error();
    }
    refs.shopList.innerHTML = renderShopBookCards(arrOfBooks.slice(0, 3));
    storagePaginationHolderAfter = createLibraryPagination(
      arrOfBooks,
      arrOfBooks.length
    );
    storagePaginationHolderAfter.movePageTo(currentPage);
    currentPage = storagePaginationHolderAfter.getCurrentPage();

    removeLoading();
  } catch (e) {
    refs.shopList.innerHTML = renderError(
      `This page is empty, add some books and proceed to order.`
    );
    removeLoading();
  }
}
