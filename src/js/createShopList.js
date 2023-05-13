import { getBooksOfCertainCategory } from './api/fetchLogic';
import { refs } from './components/refs';
import { renderShopBookCards } from './render/renderShopBookCard';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { userCurrent } from './firebase';
import { getBksFrmShpLst } from './firebase';

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
  removeLoading();
};

window.addEventListener('load', createShopList);
