import { renderSupportList } from './render/renderSupportList';
import { refs } from './components/refs';
import { funds } from './components/support-funds';

function createAllCategories() {
  const allFunds = renderSupportList(funds);
  refs.suppList.innerHTML = allFunds;
}
window.addEventListener('load', createAllCategories);
