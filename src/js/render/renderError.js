import sample from '../../images/unsuccessful_fetch.png';

export const renderError = text => {
  return `<div class="error">
    <p class="error__text">${text}</p>
    <img src="${sample}" class="error__img" alt="error" width="265">
</div>`;
};
export const renderErrorShopList = text => {
  return `<li class="error">
    <p class="error__text">${text}</p>
    <img src="${sample}" class="error__img" alt="error" width="265">
</li>`;
};
