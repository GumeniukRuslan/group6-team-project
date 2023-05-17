import { refs } from "./components/refs";

const observeTop = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            refs.scrollTopBtn.classList.remove('hidden');
        } else {
            refs.scrollTopBtn.classList.add('hidden');
        }
    });
} 

export const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
}

const toTopObserver = new IntersectionObserver(observeTop);

if (refs.scrollTopBtn && refs.scrollTopTarget) {
    toTopObserver.observe(refs.scrollTopTarget);
    refs.scrollTopBtn.addEventListener("click", scrollToTop)
}