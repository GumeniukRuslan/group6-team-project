import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { refs } from './components/refs';
import formValuesGet from './helpers/formValuesGet';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
        console.log(user);
        resolve(userCurrent);

        getUserName(user.email)
          .then(data => {
            if (!data) {
              return;
            }
            setUserName(refs.userName, data.name);
          })
          .catch(error => console.error('Error getting username: ', error));

        renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);

        return userCurrent;
      } else {
        // reject('Anyone logged in');
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
        addUserName(data.email, data.name);
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
        location.assign('/index.html' || '/group6-team-project/index.html');
        return;
      }
      renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);
      console.log('Log out');
      location.reload();
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}

//
/**
 * Функция для добавления имени пользователя в database
 * @param {string} userEmail
 * @param {string} userName
 */
async function addUserName(userEmail, userName) {
  try {
    const docRef = await setDoc(doc(db, `names/${userEmail}`), {
      name: `${userName}`,
    });
    location.reload();
  } catch (e) {
    console.error('Error adding username: ', e);
  }
}

/**
 * Функция для получения имени с database
 * @param {string} userEmail
 * @returns
 */
async function getUserName(userEmail) {
  const docRef = await getDoc(doc(db, `names/${userEmail}`));
  const data = docRef.data();

  return data;
}

/**
 * Функция для добавления книги в database Шопинг-лист по клику на (пока на картинку)
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
 * Функция для удаления книги с database Шопинг-листа по клику на (пока на тайтл)
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
  } catch (error) {
    console.error(error);
  }
}
