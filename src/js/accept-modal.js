import { refs } from './components/refs';
import { auth } from './firebase';

const form = refs.acceptModal.querySelector('form');
const reauthBox = refs.acceptModal.querySelector('.accept__reauth');
const changeInput = form.querySelector('.js-changeInput');
const title = refs.acceptModal.querySelector('h1');

export const openAcceptModal = e => {
  form.dataset.modal = e.target.dataset.modal;

  switch (e.target.dataset.modal) {
    case 'change-username':
      reauthBox.setAttribute('hidden', true);

      title.textContent = 'Change username';

      changeInput.setAttribute('type', 'text');
      changeInput.setAttribute('placeholder', 'Enter new username');
      changeInput.setAttribute('pattern', '^[a-zA-Z]+$');
      changeInput.setAttribute(
        'title',
        "The user's name must be a single word consisting only of Latin letters without spaces."
      );

      break;

    case 'change-email':
      title.textContent = 'Change email';

      changeInput.setAttribute('type', 'email');

      changeInput.setAttribute('placeholder', 'Enter new email');

      break;

    case 'change-password':
      title.textContent = 'Change password';

      changeInput.setAttribute('type', 'password');

      changeInput.setAttribute('placeholder', 'Enter new password');

      break;

    case 'delete-account':
      title.textContent = 'Delete account';

      changeInput.setAttribute('hidden', true);
      changeInput.removeAttribute('required');

      break;

    default:
      break;
  }
  refs.acceptModal.classList.add('open');
  document.body.classList.add('lock');
  refs.acceptBtnCancel.addEventListener('click', closeAcceptModal);
};

const closeAcceptModal = () => {
  refs.acceptModal.classList.remove('open');
  document.body.classList.remove('lock');
  refs.acceptBtnCancel.removeEventListener('click', closeAcceptModal);

  if (reauthBox.hasAttribute('hidden')) {
    setTimeout(() => {
      reauthBox.removeAttribute('hidden');
    }, 500);
  }

  if (changeInput.hasAttribute('hidden')) {
    setTimeout(() => {
      changeInput.removeAttribute('hidden');
    }, 500);
  }

  if (changeInput.hasAttribute('pattern')) {
    changeInput.removeAttribute('pattern');
    changeInput.removeAttribute('title');
  }

  if (!changeInput.hasAttribute('required')) {
    changeInput.setAttribute('required', true);
  }
};
