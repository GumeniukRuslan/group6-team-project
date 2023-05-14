import { refs } from './components/refs';
import { getBooksOfCertainCategory } from './api/fetchLogic';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { renderCategoryTitle } from './render/renderCategoryTitle';
import { renderBookCard } from './render/renderBookCard';
import { scrollToTop } from './scrollToTop';
import { createTopBooks } from './topBooks';
import { activeCategory } from './helpers/activeCategory';

const createCategoryBooks = async event => {
 if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'LI') {
    return;
  }
  const category = event.target.dataset.category;
  activeCategory(category);
  if (category === 'all') {
    createTopBooks();
    return;
  }
  startLoading();
  try {
    renderCategoryTitle(category);
    const categoryList = await getBooksOfCertainCategory(category);
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
refs.allCategoriesList.addEventListener('click', createCategoryBooks)
