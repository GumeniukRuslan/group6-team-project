import { refs } from './components/refs';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { closeModal } from './components/closeModalBtn';
import { onKeyDown } from './components/closeModalOnEsc';

import { addBookToShopList } from './helpers/addBookToShopList';
import { deleteBookFromModal } from './helpers/deleteBookFromModal';

import { alreadyInShopList, cleanModal, notInShopList, unloggedUserShopList } from './helpers/modalHelpers';
import { getBksFrmShpLst, userCurrent} from './firebase';

const createModal = async evt => {
  if (!evt.target.closest('.card')) {
    return;
  }
  cleanModal();
  startLoading();
  refs.backdrop.classList.remove('is-hidden');
  const bookId = evt.target.closest('.card').dataset.book;
  try {
    const dataBook = await getOneBookById(bookId);
    refs.backdrop.innerHTML = renderModal(dataBook);

    const btns = document.querySelector('.modal-book__btns');
    const booksInShopList = await getBksFrmShpLst();
    if (!userCurrent) {
      btns.innerHTML = unloggedUserShopList();
    } else {
      if (booksInShopList.includes(bookId)) {
        btns.innerHTML = alreadyInShopList();
      } else {
        btns.innerHTML = notInShopList();
      }
    }
  } catch (e) {
    refs.backdrop.innerHTML = renderError(
      `Something went wrong`
    );
  }
  // refs.backdrop.addEventListener('click', addBookToShopList);
  // refs.backdrop.addEventListener('click', deleteBookFromModal);
  refs.backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyDown);
  removeLoading();
};

refs.booksHandler.addEventListener('click', createModal);
