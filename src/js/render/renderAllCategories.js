import { getCategoryList } from '../api/fetchLogic';
import { refs } from '../components/refs';

const renderAllCategories = (data) => {
  const categories = data.map(({ list_name }) => {
    return `
      <div class="categories">
        <ul class="categories__list">
          <li class="categories__item">All categories</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
          <li class="categories__item">${list_name}</li>
        </ul>
      </div>
    `;
  }).join("");
  return categories;
} 

async function createAllCategories() {
  try {
    const allCategories = await getCategoryList();
    const categoriesHtml = renderAllCategories(allCategories);
    refs.allCategoriesList.insertAdjacentHTML("beforeend", categoriesHtml);
  } catch (error) {
    console.log(error);
  }
}

createAllCategories();

// Сделал, как ты написал, но не работает.

// import { getCategoryList } from '../api/fetchLogic';
// import { refs } from '../components/refs';

// function renderAllCategories(data) {}

// async function createAllCategories() {
//   try {
//     const allCategories = '';
//   } catch (error) {
//     console.log(error);
//   }
// }

// во-первых тебе не нужна переменная с массивом объектов, ты получаешь его через функцию которую я тебе импортировал вверху, это ассинхронная функция
// во-вторых вот это const ul = document.querySelector('.allCategories__list'); должно быть в файле refs который тоже надо импортировать, уже сделал,
//обращаешься к этому списку череpз refs.allCategoriesList
//вверху функция названная renderAllCategories в ней тебе просто надо написать логику как например в файле renderBookCard
//после в функции createAllCategories в allCategories ты должен записать вызов функции getCategoryList со словом await
//и после вставить с помощью метода insertAdjacentHTML резульатат
// ну и потом надо решаить как фунцию вызвать, покликай по примерам в других файлах, вообще эти две функции можно было бы разюбить на два файла но тут уж сам глянь