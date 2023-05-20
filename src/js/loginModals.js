import {
  closeLoginModalOnClick,
  closeLoginModal,
} from './components/closeModalBtn';
import { closeLoginModalEsc } from './components/closeModalOnEsc';
import { refs } from './components/refs';
import { closeLoginModalBackdrop } from './components/closeModalBackdrop';

const openModal = (currentModal, currentModalData) => {
  if (currentModalData !== 'sign-up' && currentModalData !== 'sign-in') {
    const content = currentModal.querySelector('.modal__content');
    if (content.querySelector('.login__switch')) {
      content.querySelector('.login__switch').remove();
    }
    let message = '';
    switch (currentModalData) {
      case 'delete-account':
        message = 'delete your account';
        break;

      case 'change-email':
        message = 'change your email';
        break;

      case 'change-password':
        message = 'change your password';
        break;

      default:
        break;
    }
    content.insertAdjacentHTML(
      'afterbegin',
      `<p class="modal__warning-message">Before ${message} you must confirm your desicion by Re-authenticate</p>`
    );
  }
  currentModal.classList.add('open');
  document.body.classList.add('lock');
  currentModal.addEventListener('click', closeLoginModalOnClick);
  currentModal.addEventListener('click', closeLoginModalBackdrop);
  window.addEventListener('keydown', closeLoginModalEsc);
  const switchModalBtns = document.querySelector(
    '.modal-overlay.open .login__switch'
  );
  if (currentModalData === 'sign-up' || currentModalData === 'sign-in') {
    switchModalBtns.addEventListener('click', changeModal);
  }

  currentModal.querySelector('form').dataset.target = currentModalData;
};

export function openLoginModal(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentModalData = event.target.dataset.login;
  let currentModal;
  if (currentModalData === 'sign-up') {
    currentModal = refs.signUpModal;
  } else if (currentModalData !== 'sign-up') {
    currentModal = refs.signInModal;
  } else {
    return;
  }
  openModal(currentModal, currentModalData);
}

if (refs.elmsNonAuth) {
  refs.elmsNonAuth.forEach(btns =>
    btns.addEventListener('click', openLoginModal)
  );
}

export function changeModal(event) {
  if (!event.target.dataset.login) {
    return;
  }
  if (event.target.classList.contains('active-label')) {
    return;
  }
  closeLoginModal();
  const newModal = event.target.dataset.login;
  openModal(document.querySelector(`.js-${newModal}`));
}
