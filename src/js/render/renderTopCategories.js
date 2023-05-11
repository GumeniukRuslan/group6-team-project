import { renderBookCard } from "./renderBookCard";

export const renderTopCategories = (data) => {
    const categories = data.map(({ list_name, books }) => {
        return `<div class="category" data-category="${list_name}">
        <h2 class="category__title">${list_name}</h2>
        <ul class="category__list">
            ${renderBookCard(books)}
        </ul>
        <button class="btn--violet category__btn" data-category="${list_name}">see more</button>
        </div>`
    }).join("");
    return categories;
} 