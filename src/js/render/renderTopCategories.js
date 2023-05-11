const renderOneCategory = (data) => {
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

export const renderTopCategories = (data) => {
    const categories = data.map(({ list_name, books }) => {
        return `<div class="category" data-category="${list_name}">
        <h2 class="category__title">${list_name}</h2>
        <ul class="category__list">
            ${renderOneCategory(books)}
        </ul>
        <button class="btn--violet category__btn" data-category="${list_name}">see more</button>
        </div>`
    }).join("");
    return categories;
} 