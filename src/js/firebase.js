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
  serverTimestamp,
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

refs.regForm.addEventListener('submit', signIn);
refs.logOutButton.addEventListener('click', logOut);

/**
 * Функция для взаимодействия со статусом пользователя(авторизован/неавторизован)
 * Функционал для авторизированного в if
 * Функционал для неавторизированного в else
 */
async function handleAuthStateChanged() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        userCurrent = user.email;
        console.log(user);
        resolve(userCurrent);

        // console.log(userCurrent);

        getUserName(user.email)
          .then(data => setUserName(refs.userName, data.name))
          .catch(error => console.error('Error adding document: ', error));

        renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);
        return userCurrent;

        //
      } else {
        console.log('Anyone logged in');
        reject(new Error('Пользователь не вошел в систему'));
      }
    });
  });
}

/**
 * Функция для регистрации
 * @param {submit} evt
 */
function registerNewUser(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  createUserWithEmailAndPassword(auth, data.email, data.password)
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
  //   location.reload();
}

/**
 * Функция для логина
 * @param {submit} evt
 */
function signIn(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;

      console.log('Signed in');
    })
    .catch(error => {
      console.log(error, 'Signed in');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

/**
 * Функция для разлогина
 * @param {click} evt
 */
function logOut(evt) {
  signOut(auth)
    .then(() => {
      renderOnAuth(refs.elmsNonAuth, refs.elmsAuth);
      console.log('Log out');
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}

//

async function addUserName(userEmail, userName) {
  try {
    const docRef = await setDoc(doc(db, `names/${userEmail}`), {
      name: `${userName}`,
    });
  } catch (e) {
    console.error('Error adding username: ', e);
  }
}

async function getUserName(userEmail) {
  const docRef = await getDoc(doc(db, `names/${userEmail}`));
  const data = await docRef.data();

  return data;
}

export async function addToShopList(evt) {
  const li = evt.target.closest('li');

  if (userCurrent) {
    console.log(li.dataset.book);
    try {
      // const dateRequest = new Date().toUTCString(); [dateRequest] { capital: true },      { merge: true }
      const docRef = await setDoc(
        doc(db, `shoplist/${userCurrent}`),
        {
          books: arrayUnion(`${li.dataset.book}`),
        },
        { merge: true }
      );
    } catch (e) {
      console.error('Error adding book: ', e);
    }
  }
}

export async function rmvFrmShopList(evt) {
  const li = evt.target.closest('li');

  if (userCurrent) {
    console.log(li.dataset.book);
    try {
      // const dateRequest = new Date().toUTCString(); [dateRequest] { capital: true },      { merge: true }
      const docRef = await updateDoc(doc(db, `shoplist/${userCurrent}`), {
        books: arrayRemove(`${li.dataset.book}`),
      });
    } catch (e) {
      console.error('Error remove book: ', e);
    }
  }
}

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
