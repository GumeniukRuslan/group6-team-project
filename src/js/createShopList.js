import { getBooksOfCertainCategory } from './api/fetchLogic';
import { refs } from './components/refs';
import { renderShopBookCards } from './render/renderShopBookCard';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { getBksFrmShpLst } from './firebase';
import { handleAuthStateChanged } from './firebase';
import { deleteBook } from './helpers/deleteBook';

handleAuthStateChanged();




const createShopList = async () => {
  startLoading();
  try {
    //Возвращает масив айдишников добавленных книг
    const data = await getBksFrmShpLst();
    console.log(data);
    const books = await getBooksOfCertainCategory(
      'Combined Print and E-Book Fiction'
    );
    refs.shopList.innerHTML = renderShopBookCards(books);
  } catch (e) {
    refs.shopList.innerHTML = renderError(
      `This page is empty, add some books and proceed to order.`
    );
  }
  refs.shopList.addEventListener('click', deleteBook);
  removeLoading();
};

window.addEventListener('load', createShopList);
