export const renderShopBookCards = data => {
  const sample = new URL('../../images/sample.png', import.meta.url);
  const amazon = new URL('../../images/amazon.png', import.meta.url);
  const book1 = new URL('../../images/book1.png', import.meta.url);
  const book2 = new URL('../../images/book2.png', import.meta.url);
  const trashIcon = new URL('../../images/icons.svg', import.meta.url);
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
        const appleURL = buy_links.filter(obj => obj.name === 'Apple Books');
        const bookShop = buy_links.filter(obj => obj.name === 'Bookshop');
        return `<li class="shopping-list_book" data-book="${_id}">
          <img class="book_img" src="${
            book_image ? book_image : sample
          }" alt="${title}" loading="lazy">
          <div class="book-information">
            <div class="flex-inheritance">
              <h2 class="book_title">${title}</h2>
              <p class="book_category">${list_name}</p>
              <p class="book_descriprion">${description}</p>
            </div>
            <div class="book_links-and-author">
              <p class="book_author">${author}</p>
              <ul class="book_shopping-links">
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${amazon_product_url}"><img class="amazon-img" src="${amazon}" alt=""></a></li>
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
                  appleURL[0].url
                }"><img class="book1_img" src="${book1}" alt=""></a></li>
                <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${
                  bookShop[0].url
                }"><img class="book2_img" src="${book2}" alt=""></a></li>
              </ul>
            </div>
          </div>
          <button class="delete-btn" type="button">
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
