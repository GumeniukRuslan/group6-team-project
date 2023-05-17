import sample from '../../images/sample.png';
import amazon from '../../images/amazon.png';
import book1 from '../../images/book1.png';
import book2 from '../../images/book2.png';
import cross from '../../images/icons.svg';

export function renderModal({
  _id,
  book_image,
  title,
  author,
  description,
  amazon_product_url,
  buy_links,
}) {
  const appleURL = buy_links.filter(obj => obj.name === 'Apple Books');
  const bookShop = buy_links.filter(obj => obj.name === 'Bookshop');
  return `<div class="modal-book">
  <button class="modal-book__close" type="button" data-modal-close>
    <svg class="modal-book__close-icon" width="24" height="24">
      <use href="${cross}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-book__content" data-book="${_id}">
      <div class="modal-book--flex">
          <div class="modal-book__thumb">
              <img class="modal-book__img" src="${
                book_image ? book_image : sample
              }" alt="${title}" loading="lazy" width="192">
          </div>
          <div class="modal-book__text">
              <h2 class="modal-book__title">${title}</h2>
              <p class="modal-book__author">${author}</p>
              <p class="modal-book__description">${
                description
                  ? description
                  : `Unfortunately, there is no description.`
              }</p>
              <ul class="modal-book__links">
                <li><a target="_blank" rel="noopener noreferrer" href="${amazon_product_url}" class="modal-book__link">
                  <img class="amazon" src="${amazon}" alt="amazon-logo" width="62"></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="${
                  appleURL[0].url
                }" class="modal-book__link">
                  <img class="book-first"src="${book1}" alt="apple-shop" width="33"></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="${
                  bookShop[0].url
                }" class="modal-book__link">
                  <img class="book-second"src="${book2}" alt="bookskop" width="38"></a></li>
              </ul>
          </div>
      </div>
      <div class="modal-book__btns"></div>
    </div>
</div>`;
}
