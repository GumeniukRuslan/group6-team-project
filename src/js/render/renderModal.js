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
  return `<div class="modal">
        <button class="modal__btn-close" type="button" data-modal-close>
          <svg class="end" width="12" height="12">
            <use href="${cross}#icon-close"></use>
          </svg>
        </button>
        <div class="modal-card__thumb" data-book="${_id}">
        <img class="book_img card__img" src="${
          book_image ? book_image : sample
        }" alt="${title}" loading="lazy">
        <h2 class="modal-card__title">${title}</h2>
        <p class="modal-card__author">${author}</p>
        <div class="modal-card__descriprion">${description}</div>
        <ul class="modal-card__links-shop">
          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${amazon_product_url}"><img class="amazon-img" src="${amazon}" alt=""></a></li>
          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
            appleURL[0].url
          }"><img class="book1_img" src="${book1}" alt=""></a></li>
          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
            bookShop[0].url
          }"><img class="book2_img" src="${book2}" alt=""></a></li>
        </ul>
        <div class="add_to_list">
          <button class="btn-add-list" type="button">add to shopping list</button>
        </div>
        <div class="remove_from_list">
        <button class="btn-remove-list" type="button">remove from the shopping list</button>
        <div class="modal-notification">
          Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </div>
      </div>
    </div>
</div>`;
}
