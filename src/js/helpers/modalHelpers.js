import { refs } from "../components/refs";

export const cleanModal = () => {
    refs.backdrop.innerHTML = '';
}

export const alreadyInShopList = () => {
    return `<button class="btn--violet modal-book__btn" type="button" data-action="delete">remove from the shopping list</button>
    <p class="modal-book__notification">
      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
    </p>`
}

export const notInShopList = () => {
    return '<button class="btn--violet modal-book__btn" type="button" data-action="add">add to shopping list</button>';
}

export const unloggedUserShopList = () => {
    return `<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>
    <p class="modal-book__notification">
     You need to sign in to be able to add books to your shopping list.
    </p>`;
}

export const backendError = () => {
    return `<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>
    <p class="modal-book__notification">
     Something went wrong.
    </p>`;
}