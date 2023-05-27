import { refs } from "./components/refs";

const closeAcceptModal = () => {
    refs.acceptModal.classList.remove('open');
    document.body.classList.remove('lock');
    refs.acceptBtnCancel.removeEventListener("click", closeAcceptModal);
}

const openAcceptModal = () => {
    refs.acceptModal.classList.add('open');
    document.body.classList.add('lock');
    refs.acceptBtnCancel.addEventListener("click", closeAcceptModal);
}
