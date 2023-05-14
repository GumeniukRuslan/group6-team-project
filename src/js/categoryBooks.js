import { refs } from './components/refs';
import { getBooksOfCertainCategory } from './api/fetchLogic';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { renderCategoryTitle } from './render/renderCategoryTitle';
import { renderBookCard } from './render/renderBookCard';
import { scrollToTop } from './scrollToTop';
import { addToShopList } from './firebase';
import { rmvFrmShopList } from './firebase';

const createCategoryBooks = async event => {
  // && li

  if (event.target.classList.contains('card__img')) {
    addToShopList(event);
  }
  if (event.target.classList.contains('card__title')) {
    rmvFrmShopList(event);
  }
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  startLoading();
  const category = event.target.dataset.category;
  try {
    const categoryList = await getBooksOfCertainCategory(category);
    renderCategoryTitle(category);
    refs.booksHandler.innerHTML = `<ul class="books__list">${renderBookCard(
      categoryList
    )}</ul>`;
    scrollToTop();
  } catch (e) {
    refs.booksHandler.innerHTML = renderError(`Something went wrong...`);
  }
  removeLoading();
};

refs.booksHandler.addEventListener('click', createCategoryBooks);
