import { refs } from './refs';
import { onKeyDown } from './closeModalOnEsc';

export function closeModal(evt) {
  if (
    evt.target.closest('.modal__btn-close') ||
    evt.target.classList.contains('backdrop')
  ) {
    refs.backdrop.classList.add('is-hidden');
    refs.backdrop.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', onKeyDown);
  }
}
