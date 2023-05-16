import { refs } from './components/refs';

refs.burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (refs.mobileMenu.classList.contains('showMenu')) {
    refs.mobileMenu.classList.remove('showMenu');

    refs.burgerCloseIcon.classList.add('hideButton');
    refs.burgerCloseIcon.classList.remove('showButton');

    refs.burgerMenuIcon.classList.add('showButton');
    refs.burgerMenuIcon.classList.remove('hideButton');

    document.body.classList.remove('lock');
  } else {
    refs.mobileMenu.classList.add('showMenu');

    refs.burgerCloseIcon.classList.add('showButton');
    refs.burgerCloseIcon.classList.remove('hideButton');

    refs.burgerMenuIcon.classList.add('hideButton');
    refs.burgerMenuIcon.classList.remove('showButton');

    document.body.classList.add('lock');
  }
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenu.classList.remove('showMenu');

  refs.burgerCloseIcon.classList.add('hideButton');
  refs.burgerCloseIcon.classList.remove('showButton');

  refs.burgerMenuIcon.classList.add('showButton');
  refs.burgerMenuIcon.classList.remove('hideButton');

  document.body.classList.remove('lock');
});
