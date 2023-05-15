import { getOneBookById } from './api/fetchLogic';
import { refs } from './components/refs';
import { renderShopBookCards } from './render/renderShopBookCard';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { getBksFrmShpLst } from './firebase';
import { handleAuthStateChanged } from './firebase';
import { createLibraryPagination } from './render/renderPagination';
import { deleteBook } from './helpers/deleteBook';

handleAuthStateChanged();

export let storagePaginationHolder;

const createShopList = async () => {
  startLoading();
  try {
    const data = await getBksFrmShpLst();
    const arrOfBooks = await handlePromiseArray(data);
    if (!arrOfBooks.length) {
      throw new Error();
    }
    refs.shopList.innerHTML = renderShopBookCards(arrOfBooks);
    storagePaginationHolder = createLibraryPagination(
      arrOfBooks,
      arrOfBooks.length
    );
    console.log(arrOfBooks);
  } catch (e) {
    refs.shopList.innerHTML = renderError(
      `This page is empty, add some books and proceed to order.`
    );
  }
  refs.shopList.addEventListener('click', deleteBook);
  removeLoading();
};

window.addEventListener('load', createShopList);

async function handlePromiseArray(arr) {
  const newArr = arr.map(async id => await getOneBookById(id));
  const markArr = await Promise.all(newArr);
  return markArr;
}
