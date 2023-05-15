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

handleAuthStateChanged();

if (window.location.pathname !== '/shopping-list.html') {
  refs.regForm.addEventListener('submit', registerNewUser);
  refs.logForm.addEventListener('submit', signIn);
}
refs.logOutButton.addEventListener('click', logOut);

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
          .then(data => setUserName(refs.userName, data.name))
          .catch(error => console.error('Error adding document: ', error));

        renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);
        return userCurrent;
      } else {
        reject('Anyone logged in');
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
  console.log(data);

  await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      // Signed in
      // const user = userCredential.user;
      addUserName(data.email, data.name);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

/**
 * Функция для логина!
 * @param {submit} evt
 */
async function signIn(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;

      console.log('Signed in');
    })
    .catch(error => {
      console.log(error.code, 'Not signed in');
      const errorCode = error.code;
      const errorMessage = error.message;
      //Обработать ошибку error.code = auth/user-not-found
    });
  location.reload();
}

/**
 * Функция для разлогина
 * @param {click} evt
 */
function logOut(evt) {
  signOut(auth)
    .then(() => {
      if (window.location.pathname === '/shopping-list.html') {
        location.assign('/index.html');
      }
      renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);
      console.log('Log out');
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
  const data = await docRef.data();

  return data;
}

/**
 * Функция для добавления книги в database Шопинг-лист по клику на (пока на картинку)
 * @param {event} evt
 */
export async function addToShopList(evt) {
  const book = evt.target.closest('.modal-card__thumb');

  if (userCurrent) {
    console.log(book.dataset.book);
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
    evt.target.closest('li') || evt.target.closest('.modal-card__thumb');

  if (userCurrent) {
    console.log(li.dataset.book);
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
    const user = await handleAuthStateChanged();
    const docRef = await getDoc(doc(db, `shoplist/${user}`));
    const data = await docRef.data();
    const booksArray = data.books;

    return booksArray;
  } catch (error) {
    console.error(error);
  }
}
