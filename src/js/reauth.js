import { refs } from './components/refs';
import formValuesGet from './helpers/formValuesGet';
import { auth, db } from './firebase';
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  updatePassword,
  updateProfile,
  deleteUser,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteDoc, doc } from 'firebase/firestore';

refs.reauthForm.addEventListener('submit', reAuth);

async function reAuth(evt) {
  evt.preventDefault();

  let data = formValuesGet(evt.target);

  if (evt.target.dataset.modal === 'change-username') {
    /**
     * Функция для смены имени
     */
    await updateProfile(auth.currentUser, {
      displayName: data.answer,
    })
      .then(() => {
        location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        data.email,
        data.password
      );
      await reauthenticateWithCredential(user, credential);
      switch (evt.target.dataset.modal) {
        case 'change-email':
          /**
           * Функция для смены email
           */
          await updateEmail(auth.currentUser, data.answer)
            .then(() => {
              location.reload();
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                Notify.failure('Oops, this email is already used');
                changeEmail();
              }
            });
          break;

        case 'change-password':
          /**
           * Функция для смены пароля
           */
          await updatePassword(auth.currentUser, data.answer)
            .then(() => {
              location.reload();
            })
            .catch(error => {
              if (error.code === 'auth/weak-password') {
                Notify.failure(
                  'Oops, password should be at least 6 characters'
                );
                changePassword();
              }
            });
          break;

        case 'delete-account':
          await deleteDoc(doc(db, `shoplist/${auth.currentUser.email}`));
          await deleteUser(auth.currentUser)
            .then(() => {
              if (
                window.location.pathname === '/shopping-list.html' ||
                window.location.pathname ===
                  '/group6-team-project/shopping-list.html'
              ) {
                location.assign('/group6-team-project/index.html');
                return;
              }
              location.reload();
            })
            .catch(error => {
              console.log(error);
            });
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/user-not-found':
          Notify.failure('Oops, user with this email not found');
          break;

        case 'auth/wrong-password':
          Notify.failure('Oops, wrong password');
          break;

        case 'auth/user-mismatch':
          Notify.failure('Oops, it`s not your credentials');
          break;

        case 'auth/invalid-email':
          Notify.failure('Oops, you have to put your email');
          break;

        case 'auth/missing-password':
          Notify.failure('Oops, you have to put your password');
          break;

        default:
          Notify.failure(error.code);
          break;
      }
    }
  }
}
