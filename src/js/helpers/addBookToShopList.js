import { addToShopList } from '../firebase';

export function addBookToShopList(evt) {
  if (evt.target.classList.contains('btn-add-list')) {
    try {
      addToShopList(evt);
      console.log('hooray');
    } catch (error) {
      console.log(error);
    }
  }
}
