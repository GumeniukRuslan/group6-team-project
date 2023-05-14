import { refs } from './components/refs';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';
import { closeModal } from './components/closeModalBtn';
import { onKeyDown } from './components/closeModalOnEsc';

const createModal = async evt => {
  if (!evt.target.closest('.card')) {
    return;
  }
  refs.backdrop.innerHTML = '';
  refs.backdrop.classList.remove('is-hidden');
  startLoading();
  const bookId = evt.target.closest('.card').dataset.book;
  try {
    const dataBook = await getOneBookById(bookId);
    refs.backdrop.innerHTML = renderModal(dataBook);
  } catch (e) {
    refs.backdrop.innerHTML = renderError(
      `This page is empty, add some books and proceed to order.`
    );
  }
  refs.backdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyDown);
  removeLoading();
};

refs.booksHandler.addEventListener('click', createModal);

// export function toggleModal() {
//   refs.modalWindow.classList.toggle('is-hidden');
// }
