import { refs } from '../components/refs';
import { rmvFrmShopList } from '../firebase';
import { renderShopBookCards } from '../render/renderShopBookCard';
import { getBksFrmShpLst } from '../firebase';
import { renderError } from '../render/renderError';
import { storagePaginationHolder } from '../createShopList';

export async function deleteBook(evt) {
  if (!evt.target.closest('.delete-btn')) {
    return;
  }
  refs.shopList.removeChild(evt.target.closest('.shopping-list_book'));
  await rmvFrmShopList(evt);
  const data = await getBksFrmShpLst();
  if (!refs.shopList.children.length) {
    if (!data.length) {
      console.log(data);
      refs.paginationBlock.style.display = 'none';
      return (refs.shopList.innerHTML = renderError(
        `This page is empty, add some books and proceed to order.`
      ));
    }
    if (storagePaginationHolder._currentPage === 1) {
      storagePaginationHolder.movePageTo(
        storagePaginationHolder.getCurrentPage() + 1
      );
    } else if (
      !(
        storagePaginationHolder._currentPage <
        storagePaginationHolder._options.visiblePages
      )
    ) {
      storagePaginationHolder.movePageTo(
        storagePaginationHolder.getCurrentPage() - 1
      );
    } else if (
      storagePaginationHolder._currentPage <
      storagePaginationHolder._options.visiblePages
    ) {
      storagePaginationHolder.movePageTo(
        storagePaginationHolder.getCurrentPage() + 1
      );

      storagePaginationHolder._options.visiblePages -= 1;
      if (storagePaginationHolder._options.visiblePages === 1) {
        refs.paginationBlock.style.display = 'none';
      }
      console.log(storagePaginationHolder);
    }
  }
}
