import { getCategoryList } from '../api/fetchLogic';
import { refs } from '../components/refs';

const renderAllCategories = data => {
  const categories = data
    .map(({ list_name }) => {
      return `<li class="categories__item" data-category="${list_name}">${list_name}</li>`;
    })
    .join('');
  return categories;
};

async function createAllCategories() {
  try {
    const allCategories = await getCategoryList();
    refs.allCategoriesList.insertAdjacentHTML(
      'beforeend',
      renderAllCategories(allCategories)
    );
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', createAllCategories);