import sample from '../../images/sample.png';
import amazon from '../../images/amazon.png';
import book1 from '../../images/book1.png';
import book2 from '../../images/book2.png';
import trashIcon from '../../images/icons.svg';

export const renderShopBookCards = data => {
  const books = data
    .map(
      ({
        _id,
        book_image,
        title,
        author,
        list_name,
        amazon_product_url,
        description,
        buy_links,
      }) => {
        const appleURL = buy_links.find(obj => obj.name === 'Apple Books');
        const bookShop = buy_links.find(obj => obj.name === 'Bookshop');
        return `<li class="shopping-list_book" data-book="${_id}">
          <img class="book_img" src="${
            book_image ? book_image : sample
          }" alt="${title}" loading="lazy">
          <div class="book-information">
            <div class="flex-inheritance">
              <h2 class="book_title">${title}</h2>
              <p class="book_category">${list_name}</p>
              <p class="book_descriprion">${
                description
                  ? description
                  : 'Unfortunately, there is no description.'
              }</p>
            </div>
            <div class="book_links-and-author">
              <p class="book_author">${author}</p>
              <ul class="book_shopping-links">
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${amazon_product_url}"><img class="amazon-img" src="${amazon}" alt=""></a></li>
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
                  appleURL.url
                }"><img class="book1_img" src="${book1}" alt=""></a></li>
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
                  bookShop.url
                }"><img class="book2_img" src="${book2}" alt=""></a></li>
              </ul>
            </div>
          </div>
          <button class="delete-btn" type="button" aria-label="delete-book">
            <svg class="shopping-trash__svg">
             <use href="${trashIcon}#icon-bin"></use
            </svg>
          </button>
        </li>`;
      }
    )
    .join('');
  return books;
};
