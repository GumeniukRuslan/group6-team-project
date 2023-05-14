import { refs } from '../components/refs';
import { rmvFrmShopList } from '../firebase';

export function deleteBookFromModal(evt) {
  if (evt.target.classList.contains('btn-remove-list')) {
    try {
      rmvFrmShopList(evt);
    } catch (error) {
      console.log(error);
    }
  }
}
