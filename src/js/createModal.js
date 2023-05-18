import { refs } from './components/refs';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import {
  LoaderBackdropStart,
  removeLoading,
  startLoading,
} from './helpers/spinner';
import { renderError } from './render/renderError';
import { closeModal } from './components/closeModalBtn';
import { onKeyDown } from './components/closeModalOnEsc';
import { closeModalBackdrop } from './components/closeModalBackdrop';
import { Notify } from 'notiflix';

import { addBookToShopList } from './helpers/addBookToShopList';

import {
  alreadyInShopList,
  backendError,
  cleanModal,
  notInShopList,
  unloggedUserShopList,
} from './helpers/modalHelpers';
import { getBksFrmShpLst, userCurrent } from './firebase';

export const openModalBook = async id => {
  LoaderBackdropStart();
  try {
    const dataBook = await getOneBookById(id);
    refs.backdrop.innerHTML = renderModal(dataBook);

    const btns = document.querySelector('.modal-book__btns');
    if (!userCurrent) {
      btns.innerHTML = unloggedUserShopList();
    } else {
      try {
        const booksInShopList = await getBksFrmShpLst();
        if (booksInShopList && booksInShopList.includes(id)) {
          btns.innerHTML = alreadyInShopList();
        } else {
          btns.innerHTML = notInShopList();
        }
      } catch (e) {
        btns.innerHTML = backendError();
      }
    }
    const btnClose = document.querySelector('[data-modal-close]');
    btnClose.addEventListener('click', closeModal);
    refs.backdrop.addEventListener('click', closeModalBackdrop);
    document.body.classList.add('lock');
    window.addEventListener('keydown', onKeyDown);

    const btnShop = document.querySelector('.modal-book__btn');
    if (btnShop.disabled === false) {
      btnShop.addEventListener('click', addBookToShopList);
    }
    refs.backdrop.classList.remove('is-hidden');
    removeLoading();
  } catch (error) {
    Notify.failure('Oops, something went wrong');
    removeLoading();
  }
};

const createModal = async evt => {
  if (!evt.target.closest('.card')) {
    removeLoading();
    return;
  }
  cleanModal();

  const bookId = evt.target.closest('.card').dataset.book;
  try {
    openModalBook(bookId);
  } catch (e) {
    refs.backdrop.innerHTML = renderError(`Something went wrong`);
  }
};

if (refs.booksHandler) {
  refs.booksHandler.addEventListener('click', createModal);
}
