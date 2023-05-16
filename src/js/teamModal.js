import { refs } from "./components/refs"
import { team } from "./components/team"
import { renderTeamMember } from "./render/renderTeamMember"

const TeamModalRender = () => {
    refs.teamList.innerHTML = renderTeamMember(team);
}

const closeTeamModalBackdrop = (event) => {
    if (event.target === event.currentTarget) {
        closeTeamModal();
    }
}

const closeOnEsc = (event) => {
    if (event.code !== 'Escape') {
        return;
    }
    closeTeamModal();
}

const closeTeamModal = () => {
    refs.teamModal.classList.remove('open');
    document.body.classList.remove('lock');
    refs.btnTeamModalClose.removeEventListener("click", closeTeamModal);
    refs.teamModal.removeEventListener("click", closeTeamModalBackdrop);
    window.removeEventListener('keydown', closeOnEsc)
}

const openTeamModal = () => {
    refs.teamModal.classList.add('open');
    document.body.classList.add('lock');
    refs.btnTeamModalClose.addEventListener("click", closeTeamModal);
    refs.teamModal.addEventListener("click", closeTeamModalBackdrop);
    window.addEventListener('keydown', closeOnEsc)
}

window.addEventListener("load", TeamModalRender)

if (refs.openTeamBtn) {
    refs.openTeamBtn.addEventListener("click", openTeamModal)
}