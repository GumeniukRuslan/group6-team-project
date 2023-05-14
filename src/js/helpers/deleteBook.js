import { refs } from '../components/refs';

export function deleteBook(evt) {
  if (!evt.target.closest('.delete-btn')) {
    return;
  }
  return refs.shopList.removeChild(evt.target.closest('.shopping-list_book'));
}
