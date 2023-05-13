import { refs } from './components/refs';
import { modal_open_close } from './components/modalOpenClose';
import { getOneBookById } from './api/fetchLogic';
import { renderModal } from './render/renderModal';
import { removeLoading, startLoading } from './helpers/spinner';
import { renderError } from './render/renderError';

const createModal = async (evt) => {
    modal_open_close();
    refs.backdrop.innerHTML = "";
    startLoading();
    const bookId = evt.target.dataset.book;
    
    try {
      const book = await getOneBookById(bookId);
      refs.backdrop.innerHTML = renderModal(book);
    } catch (e) {
      refs.backdrop.innerHTML = renderError();
    }
    removeLoading();
  };
  
  document.addEventListener('click', createModal);
