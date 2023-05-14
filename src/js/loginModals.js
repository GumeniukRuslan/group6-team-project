import { closeLoginModalOnClick, closeLoginModalBackdrop, closeLoginModal } from "./components/closeModalBtn";
import { closeLoginModalEsc } from "./components/closeModalOnEsc";
import { refs } from "./components/refs";

const openModal = (currentModal) => {
  currentModal.classList.add('open');
  document.body.classList.add('lock');
  currentModal.addEventListener("click", closeLoginModalOnClick);
  currentModal.addEventListener("click", closeLoginModalBackdrop);
  window.addEventListener("keydown", closeLoginModalEsc);
  const switchModalBtns = document.querySelector('.modal-overlay.open .login__switch');
  switchModalBtns.addEventListener("click", changeModal);
}

function openLoginModal(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } 
  const currentModalData = event.target.dataset.login;
  let currentModal;
  if (currentModalData === 'sign-up') {
    currentModal = refs.signUpModal;
  } else if (currentModalData === 'sign-in') {
    currentModal = refs.signInModal;
  } else {
    return;
  }
  openModal(currentModal);
}

if (refs.loginModalOpenBtns) {
  refs.loginModalOpenBtns.addEventListener("click", openLoginModal);
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
  openModal(document.querySelector(`.js-${newModal}`))

}

