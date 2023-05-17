import { refs } from "./components/refs"

const activePageHighlight = () => {
    const titleOfPage = document.querySelector('title').textContent.toLowerCase();
    const homeLinks = document.querySelectorAll('[data-page="home"]');
    const shopLinks = document.querySelectorAll('[data-page="shop-list"]');
    if (titleOfPage === 'bookshelf') {
        homeLinks.forEach(homeLink => homeLink.classList.add('active-page'));
        shopLinks.forEach(shopLink => shopLink.classList.remove('active-page'));
    } else if (titleOfPage === 'shopping list') {
        homeLinks.forEach(homeLink => homeLink.classList.remove('active-page'));
        shopLinks.forEach(shopLink => shopLink.classList.add('active-page'));
    } else {
        return;
    }
}

if (refs.headerPages) {
    window.addEventListener("load", activePageHighlight);
}
