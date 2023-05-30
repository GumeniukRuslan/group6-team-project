import { refs } from './refs';
import { onKeyDown, closeLoginModalEsc } from './closeModalOnEsc';
import { changeModal } from '../loginModals';
import {
  closeLoginModalBackdrop,
  closeModalBackdrop,
} from './closeModalBackdrop';

import { addBookToShopList } from '../helpers/addBookToShopList';

export function closeModal() {
  const closeBtn = document.querySelector('[data-modal-close]');
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('lock');
  closeBtn.removeEventListener('click', closeModal);
  refs.backdrop.removeEventListener('click', closeModalBackdrop);
  window.removeEventListener('keydown', onKeyDown);
  const btnShop = document.querySelector('.modal-book__btn');
  if (btnShop.disabled === false) {
    btnShop.removeEventListener('click', addBookToShopList);
  }
}

export const closeLoginModal = () => {
  const switchModalBtns = document.querySelector(
    '.modal-overlay.open .login__switch'
  );
  switchModalBtns.removeEventListener('click', changeModal);
  const currentModal = document.querySelector('.modal-overlay.open');
  currentModal.classList.remove('open');
  document.body.classList.remove('lock');
  currentModal.removeEventListener('click', closeLoginModalOnClick);
  currentModal.removeEventListener('click', closeLoginModalBackdrop);
  currentModal.addEventListener('keydown', closeLoginModalEsc);
};

export const closeLoginModalOnClick = event => {
  if (!event.target.closest('button')) {
    return;
  }
  if (!event.target.closest('button').classList.contains('modal__close')) {
    return;
  }
  closeLoginModal(event);
};
