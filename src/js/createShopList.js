import { getBooksOfCertainCategory } from './api/fetchLogic';
import { refs } from './components/refs';
import { renderShopBookCards } from './render/renderShopBookCard';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';

const createShopList = async () => {
  startLoading();
  try {
    const books = await getBooksOfCertainCategory(
      'Combined Print and E-Book Fiction'
    );
    refs.shopList.innerHTML = renderShopBookCards(books);
  } catch (e) {
    refs.shopList.innerHTML = renderError();
  }
  removeLoading();
};

window.addEventListener('load', createShopList);
