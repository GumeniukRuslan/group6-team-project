import { closeLoginModal, closeModal } from "./closeModalBtn";

export const closeLoginModalBackdrop = (event) => {
    if (event.target === event.currentTarget && event.target.classList.contains('modal-overlay')) {
      closeLoginModal(event);
    }
  }
  
  export const closeModalBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
}