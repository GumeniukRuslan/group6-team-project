import { refs } from './components/refs';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { closeModal } from './components/closeModalBtn';
import { onKeyDown } from './components/closeModalOnEsc';
import { closeModalBackdrop } from './components/closeModalBackdrop';

import { addBookToShopList } from './helpers/addBookToShopList';

import { alreadyInShopList, cleanModal, notInShopList, unloggedUserShopList } from './helpers/modalHelpers';
import { getBksFrmShpLst, userCurrent} from './firebase';

export const openModalBook = async (id) => {
  const dataBook = await getOneBookById(id);
  refs.backdrop.innerHTML = renderModal(dataBook);

  const btns = document.querySelector('.modal-book__btns');
  const booksInShopList = await getBksFrmShpLst();
  if (!userCurrent) {
      btns.innerHTML = unloggedUserShopList();
  } else {
      if (booksInShopList.includes(id)) {
          btns.innerHTML = alreadyInShopList();
      } else {
          btns.innerHTML = notInShopList();
      }
  }
  const btnClose = document.querySelector('[data-modal-close]');
  btnClose.addEventListener('click', closeModal);

  refs.backdrop.addEventListener("click", closeModalBackdrop);
  document.body.classList.add('lock');
  window.addEventListener('keydown', onKeyDown);

  const btnShop = document.querySelector('.modal-book__btn');
  if (btnShop.disabled = 'true') {
    btnShop.addEventListener("click", addBookToShopList);
  }
}

const createModal = async evt => {
  if (!evt.target.closest('.card')) {
    return;
  }
  cleanModal();
  startLoading();
  refs.backdrop.classList.remove('is-hidden');
  const bookId = evt.target.closest('.card').dataset.book;
  try {
    openModalBook(bookId)
  } catch (e) {
    refs.backdrop.innerHTML = renderError(
      `Something went wrong`
    );
  }
  removeLoading();
};


if (refs.booksHandler) {
  refs.booksHandler.addEventListener('click', createModal);
}
