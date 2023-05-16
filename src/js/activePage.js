import { refs } from "./components/refs"

const activePageHighlight = () => {
    const titleOfPage = document.querySelector('title').textContent.toLowerCase();
    const homeLink = document.querySelector('[data-page="home"]');
    const shopLink = document.querySelector('[data-page="shop-list"]');
    if (titleOfPage === 'bookshelf') {
        homeLink.classList.add('active-page');
        shopLink.classList.remove('active-page');
    } else if (titleOfPage === 'shopping list') {
        homeLink.classList.remove('active-page');
        shopLink.classList.add('active-page');
    } else {
        return;
    }
}

if (refs.headerPages) {
    window.addEventListener("load", activePageHighlight);
}
