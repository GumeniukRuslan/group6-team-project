import { refs } from '../components/refs';
import { rmvFrmShopList } from '../firebase';
import { renderShopBookCards } from '../render/renderShopBookCard';

export function deleteBook(evt) {
  if (!evt.target.closest('.delete-btn')) {
    return;
  }
  refs.shopList.removeChild(evt.target.closest('.shopping-list_book'));
  rmvFrmShopList(evt);
}

// /**
//  * Функция для удаления книги с database Шопинг-листа по клику на (пока на тайтл)
//  * @param {event} evt
//  */
// export async function rmvFrmShopList(evt) {
//   const li = evt.target.closest('li');

//   if (userCurrent) {
//     console.log(li.dataset.book);
//     try {
//       const docRef = await updateDoc(doc(db, `shoplist/${userCurrent}`), {
//         books: arrayRemove(`${li.dataset.book}`),
//       });
//     } catch (e) {
//       console.error('Error remove book: ', e);
//     }
//   }
// }
