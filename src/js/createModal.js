import { refs } from './components/refs';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';

const createModal = async evt => {
  if (!evt.target.closest('.card')) {
    return;
  }
  refs.backdrop.innerHTML = '';
  refs.backdrop.classList.remove('is-hidden');
  startLoading();
  const bookId = evt.target.closest('.card').dataset.book;
  console.log(bookId);

  const dataBook = await getOneBookById(bookId);
  console.log(dataBook);
  console.log(renderModal(dataBook));
  refs.backdrop.innerHTML = renderModal(dataBook);

  removeLoading();
};

refs.booksHandler.addEventListener('click', createModal);

// export function toggleModal() {
//   refs.modalWindow.classList.toggle('is-hidden');
// }
