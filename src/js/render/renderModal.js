export const renderModal = data => {
    const sample = new URL('../../images/sample.png', import.meta.url);
    const amazon = new URL('../../images/amazon.png', import.meta.url);
    const book1 = new URL('../../images/book1.png', import.meta.url);
    const book2 = new URL('../../images/book2.png', import.meta.url);
  
      const book = (({ _id, book_image, title, author, description, amazon_product_url, }) => {
      return `<div class="modal">
        <button class="modal__btn-close" type="button" data-modal-close>
          <svg class="end" width="12" height="12">
            <use href="./images/icons.svg#icon-close"></use>
          </svg>
        </button>
        <div class="modal-card__thumb" data-book="${_id}>
        <img src="${book_image ? book_image : sample}" loading="lazy" alt="${title}" class="card__img">
        <h2 class="modal-card__title">${title}</h2>
        <p class="modal-card__author">${author}</p>
        <div class="modal-card__descriprion">${description}</div>
        <ul class="modal-card__links-shop">
          <li><a class="modal-card__link" href="${amazon_product_url}"><img class="amazon-img" src="src="${amazon}" alt="amazon"></a></li>
          <li><a class="modal-card__link" href="${amazon_product_url}"><img class="book1_img" src="${book1}" alt="book1"></a></li>
          <li><a class="modal-card__link" href="${amazon_product_url}"><img class="book2_img" src="${book2}" alt="book2"></a></li>
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
</div>`
    }).join("");
    return book;
}
