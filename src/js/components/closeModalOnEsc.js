import { refs } from './refs';
import { closeLoginModal, closeModal } from './closeModalBtn';
import { addBookToShopList } from '../helpers/addBookToShopList';
import { deleteBookFromModal } from '../helpers/deleteBookFromModal';

export function onKeyDown(evt) {
  if (evt.code === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.body.classList.remove('lock');
    refs.backdrop.removeEventListener('click', deleteBookFromModal);
    refs.backdrop.removeEventListener('click', addBookToShopList);
    refs.backdrop.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', onKeyDown);
  }
}

export const closeLoginModalEsc = event => {
  if (event.code !== 'Escape') {
    return;
  } else {
    closeLoginModal(event);
  }
};
