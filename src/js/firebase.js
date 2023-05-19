import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from 'firebase/firestore';
import { refs } from './components/refs';
import formValuesGet from './helpers/formValuesGet';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { NOTIFY_OPTIONS } from './components/notifyOptions';
import renderOnAuth from './render/renderOnAuth';
import setUserName from './render/setUserName';

const firebaseConfig = {
  apiKey: 'AIzaSyCFbDfMxvAAm2TBu0RcI8fVQFaZMghyfcY',
  authDomain: 'bookshelf-6548b.firebaseapp.com',
  projectId: 'bookshelf-6548b',
  storageBucket: 'bookshelf-6548b.appspot.com',
  messagingSenderId: '936046608055',
  appId: '1:936046608055:web:7d7f4650819a608ae7d732',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export let userCurrent = null;

if (
  window.location.pathname !== '/shopping-list.html' &&
  window.location.pathname !== '/group6-team-project/shopping-list.html'
) {
  handleAuthStateChanged();
  refs.regForm.addEventListener('submit', registerNewUser);
  refs.logForm.addEventListener('submit', signIn);
}
refs.logOutButtons.forEach(button => {
  button.addEventListener('click', logOut);
});
// refs.dltAccntButtons.forEach(button => {
//   button.addEventListener('click', dltUser);
// });
refs.updateUsrnameButtons.forEach(button => {
  button.addEventListener('click', updateUsername);
});

/**
 * Функция для взаимодействия со статусом пользователя(авторизован/неавторизован)
 * обернутая в промис для возможности вызова её в другом месте
 * и получении статуса пользователя
 * Функционал для авторизированного в if
 * Функционал для неавторизированного в else
 */
export async function handleAuthStateChanged() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        userCurrent = user.email;
        resolve(userCurrent);

        if (user.displayName) {
          setUserName(refs.userName, user.displayName);
        }

        renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);

        return userCurrent;
      } else {
        return;
      }
    });
  });
}

/**
 * Функция для регистрации
 * @param {submit} evt
 */
async function registerNewUser(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      evt.target.reset();
      if (data.name) {
        addUserName(data.name);
      } else location.reload();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/email-already-in-use') {
        Notify.failure('Oops, this email is already used');
      }
    });
}

/**
 * Функция для логина
 * @param {submit} evt
 */
async function signIn(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      evt.target.reset();
      location.reload();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      switch (errorCode) {
        case 'auth/user-not-found':
          Notify.failure('Oops, user with this email not found');
          break;

        case 'auth/wrong-password':
          Notify.failure('Oops, wrong password');
          break;

        default:
          Notify.failure(errorCode);
          break;
      }
    });
  credentials = data;
}

/**
 * Функция для разлогина
 * @param {click} evt
 */
function logOut(evt) {
  signOut(auth)
    .then(() => {
      if (
        window.location.pathname === '/shopping-list.html' ||
        window.location.pathname === '/group6-team-project/shopping-list.html'
      ) {
        location.assign('/group6-team-project/index.html');
        return;
      }
      console.log('Log out');
      location.reload();
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}

/**
 * Функция для удаления аккаунта
 * @param {click} evt
 */
// function dltUser(evt) {
//   Confirm.show(
//     'Delete your account',
//     'Are you sure?',
//     'Delete account',
//     'Reject',
//     Yes,
//     () => {},
//     NOTIFY_OPTIONS
//   );
// }

// async function Yes() {
//   await deleteDoc(doc(db, `shoplist/${userCurrent}`));
//   await deleteUser(auth.currentUser)
//     .then(() => {
//       if (
//         window.location.pathname === '/shopping-list.html' ||
//         window.location.pathname === '/group6-team-project/shopping-list.html'
//       ) {
//         location.assign('/group6-team-project/index.html');
//         return;
//       }
//       location.reload();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

/**
 * Функция для добавления имени пользователя в аккаунт
 * @param {string} userName
 */
function addUserName(userName) {
  updateProfile(auth.currentUser, {
    displayName: userName,
  })
    .then(() => {
      location.reload();
      console.log('Profile updated!');
    })
    .catch(error => {
      console.log(error);
    });
}

function updateUsername() {
  Confirm.prompt(
    'Update username',
    'Please, enter new username',
    '',
    'Change',
    'Cancel',
    clientAnswer => {
      updateProfile(auth.currentUser, {
        displayName: clientAnswer,
      })
        .then(() => {
          location.reload();
          console.log('Profile updated!');
        })
        .catch(error => {
          console.log(error);
        });
    },
    () => {},
    NOTIFY_OPTIONS
  );
}

/**
 * Функция для добавления книги в database Шопинг-лист по клику
 * @param {event} evt
 */
export async function addToShopList(evt) {
  const book = evt.target.closest('.modal-book__content');

  if (userCurrent) {
    try {
      const docRef = await setDoc(
        doc(db, `shoplist/${userCurrent}`),
        {
          books: arrayUnion(`${book.dataset.book}`),
        },
        { merge: true }
      );
    } catch (e) {
      console.error('Error adding book: ', e);
    }
  }
}

/**
 * Функция для удаления книги с database Шопинг-листа по клику
 * @param {event} evt
 */
export async function rmvFrmShopList(evt) {
  const li =
    evt.target.closest('li') || evt.target.closest('.modal-book__content');

  if (userCurrent) {
    try {
      const docRef = await updateDoc(doc(db, `shoplist/${userCurrent}`), {
        books: arrayRemove(`${li.dataset.book}`),
      });
    } catch (e) {
      console.error('Error remove book: ', e);
    }
  }
}

export async function rmvAllFrmShopList() {
  if (userCurrent) {
    try {
      const docRef = await setDoc(doc(db, `shoplist/${userCurrent}`), {
        books: [],
      });
    } catch (e) {
      console.error('Error removing book: ', e);
    }
  }
}

/**
 * Функция для получения книг с database Шопинг-листа по загрузке страницы
 * @returns масив книг
 */
export async function getBksFrmShpLst() {
  try {
    const docRef = await getDoc(doc(db, `shoplist/${userCurrent}`));
    const data = docRef.data();
    const booksArray = data.books;

    return booksArray;
  } catch (error) {}
}
