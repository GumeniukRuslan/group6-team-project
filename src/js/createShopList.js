import { getOneBookById } from './api/fetchLogic';
import { refs } from './components/refs';
import { renderShopBookCards } from './render/renderShopBookCard';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderErrorShopList } from './render/renderError';
import { getBksFrmShpLst } from './firebase';
import { handleAuthStateChanged } from './firebase';
import { createLibraryPagination } from './render/renderPagination';
import { deleteBook } from './helpers/deleteBook';
import { deleteAllBooks } from './helpers/deleteAllBooks';

export let storagePaginationHolder;

export const createShopList = async () => {
  startLoading();
  try {
    const user = await handleAuthStateChanged();
    const data = await getBksFrmShpLst();
    const arrOfBooks = await handlePromiseArray(data);
    if (!arrOfBooks.length) {
      throw new Error();
    }
    refs.deleteAllBtn.classList.remove('hidden');
    refs.paginationBlock.style.display = 'flex';
    if (window.matchMedia('(min-width: 768px)').matches) {
      refs.shopList.innerHTML = renderShopBookCards(arrOfBooks.slice(0, 3));
    } else {
      refs.shopList.innerHTML = renderShopBookCards(arrOfBooks.slice(0, 4));
    }

    storagePaginationHolder = createLibraryPagination(
      arrOfBooks,
      arrOfBooks.length
    );
  } catch (e) {
    refs.shopList.innerHTML = renderErrorShopList(
      `This page is empty, add some books and proceed to order.`
    );
  }
  refs.deleteAllBtn.addEventListener('click', deleteAllBooks);
  refs.shopList.addEventListener('click', deleteBook);
  removeLoading();
};

window.addEventListener('load', createShopList);

export async function handlePromiseArray(arr) {
  const newArr = arr.map(async id => await getOneBookById(id));
  const markArr = await Promise.allSettled(newArr);
  const result = markArr
    .filter(obj => obj.status === 'fulfilled')
    .map(obj => obj.value);
  return result;
}
