const categories = [
    {
      "list_name": "Trade Fiction Paperback"
    },
    {
      "list_name": "Series Books"
    },
    {
      "list_name": "Picture Books"
    },
    {
      "list_name": "Hardcover Fiction"
    },
    {
      "list_name": "Advice How-To and Miscellaneous"
    },
    {
      "list_name": "Hardcover Nonfiction"
    },
    {
      "list_name": "Paperback Nonfiction"
    },
    {
      "list_name": "Childrens Middle Grade Hardcover"
    },
    {
      "list_name": "Young Adult Hardcover"
    },
    {
      "list_name": "Combined Print and E-Book Nonfiction"
    },
    {
      "list_name": "Combined Print and E-Book Fiction"
    }
];
  
// Функція, яка створює елемент <li> з назвою категорії
function createCategoryListItem(categoryName) {
  const li = document.createElement('li');
  li.textContent = categoryName;
  li.classList.add('list_name');
  return li;
}
    
// Функція, яка рендерить список категорій на сторінці
function renderCategoryList(categories) {
  const ul = document.querySelector('.categories__list');
  const categoryListItems = categories.map(category => createCategoryListItem(category.list_name));
  categoryListItems.forEach(li => ul.appendChild(li));
}
  
renderCategoryList(categories);