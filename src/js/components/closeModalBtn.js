import { refs } from './refs';
import { onKeyDown, closeLoginModalEsc } from './closeModalOnEsc';
import { addBookToShopList } from '../helpers/addBookToShopList';
import { deleteBookFromModal } from '../helpers/deleteBookFromModal';
import { changeModal } from '../loginModals';

export function closeModal(evt) {
  refs.backdrop.classList.add('is-hidden');
// .removeEventListener('click', deleteBookFromModal);
//   refs.backdrop.removeEventListener('click', addBookToShopList);
  evt.currentTarget.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onKeyDown);
}

export const closeLoginModal = () => {
  const switchModalBtns = document.querySelector('.modal-overlay.open .login__switch');
  switchModalBtns.removeEventListener("click", changeModal);
  const currentModal = document.querySelector('.modal-overlay.open')
  currentModal.classList.remove('open');
  document.body.classList.remove('lock');
  currentModal.removeEventListener("click", closeLoginModalOnClick);
  currentModal.removeEventListener("click", closeLoginModalBackdrop);
  currentModal.addEventListener("keydown", closeLoginModalEsc);

}

export const closeLoginModalOnClick = (event) => {
  if (!event.target.closest('button')) {
    return;
  }
  if (!event.target.closest('button').classList.contains('modal__close')) {
    return;
  }
  closeLoginModal(event);
}

export const closeLoginModalBackdrop = (event) => {
  if (event.target === event.currentTarget && event.target.classList.contains('modal-overlay')) {
    closeLoginModal(event);
  }
}
