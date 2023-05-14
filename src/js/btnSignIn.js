import { refs } from "./components/refs";


refs.signInBtn.addEventListener("click", openLoginModal);
refs.signUpBtn.addEventListener("click", openLoginModal)


function openLoginModal(event) {
  event.preventDefault();
  refs.loginModal.style.display = 'flex';
  refs.bodyRef.style.overflow ='hidden';
}
