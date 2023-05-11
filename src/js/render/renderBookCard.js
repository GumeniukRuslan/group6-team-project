export const renderBookCard = (data) => {
    const books = data.map(({ _id, book_image, title, author }) => {
        return `<li class="card" data-book="${_id}">
        <div class="card__thumb">
            <img src="${book_image}" alt="${title}" class="card__img">
            <div class="card__text">
                <p class="card__text-inner">quick view</p>
            </div>
        </div>
        <h3 class="card__title">${title}</h3>
        <h4 class="card__author">${author}</h4>
    </li>`
    }).join("");
    return books;
}
