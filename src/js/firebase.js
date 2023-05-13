import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { refs } from './components/refs';
import formValuesGet from './helpers/formValuesGet';
import renderOnAuth from './render/renderOnAuth';

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

let userCurrent = null;

refs.regForm.addEventListener('submit', signIn);
refs.logOutButton.addEventListener('click', logOut);

/**
 * Функция для взаимодействия со статусом пользователя(авторизован/неавторизован)
 * Функционал для авторизированного в if
 * Функционал для неавторизированного в else
 */
onAuthStateChanged(auth, user => {
  if (user) {
    userCurrent = user.email;
    //
    console.log(user);

    renderOnAuth();

    //
  } else {
    console.log('Anyone logged in');
  }
});

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

      const user = userCredential.user;
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
      renderOnAuth();
      console.log('Log out');
    })
    .catch(error => {
      console.log(error, 'Log out error');
    });
}
