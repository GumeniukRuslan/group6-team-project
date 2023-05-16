import { addToShopList, rmvFrmShopList } from '../firebase';

export function addBookToShopList(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  const btnsHolder = document.querySelector('.modal-book__btns');
  if (evt.target.dataset.action === 'add') {
    try {
      addToShopList(evt);
      evt.target.dataset.action = 'delete';
      evt.target.textContent = 'remove from shopping list'
      btnsHolder.insertAdjacentHTML("beforeend", `<p class="modal-book__notification">
      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
    </p>`);
    } catch (error) {
      console.log(error);
    }
  } else if (evt.target.dataset.action === 'delete' ) {
    try {
      rmvFrmShopList(evt);
      evt.target.dataset.action = 'add';
      evt.target.textContent = 'add to the shopping list';
      document.querySelector('.modal-book__notification').remove();
    } catch (e) {
      console.log(e);
    }
  }
}
