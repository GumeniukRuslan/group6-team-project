import { refs } from './components/refs';
import { toggleModal } from './components/toggleModal';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';

const createModal = async (evt) => {
    toggleModal();
    refs.backdrop.innerHTML = "";
    startLoading();
    const bookId = evt.target.dataset.book;
    
    try {
      const dataBook = await getOneBookById(bookId);
      refs.backdrop.innerHTML = renderModal(dataBook);
    } catch (e) {
      refs.backdrop.innerHTML = renderError(
        `This page is empty, add some books and proceed to order.`);
    }
    removeLoading();
  };
  
  refs.bookCard.addEventListener('click', createModal);

  
