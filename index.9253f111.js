function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.9253f111.js","kx99P":"sample.eaf37d8e.png","1yVwl":"amazon.8e8667c1.png","4tfg6":"book1.8d01f172.png","cv7CL":"book2.b226e49c.png","8OQ7p":"icons.7429e8d9.svg","4l2W5":"index.e699c2f0.js"}')),r("fAODQ"),r("3oIZ9"),r("2ix2C");var s=r("2e5nt"),a=r("fAODQ");window.addEventListener("load",(async function(){try{const e=await(0,s.getCategoryList)();a.refs.allCategoriesList.insertAdjacentHTML("beforeend",e.map((({list_name:e})=>`<li class="categories__item" data-category="${e}">${e}</li>`)).join(""))}catch(e){console.log(e)}})),r("7dwgr");var i;s=r("2e5nt"),a=r("fAODQ");i=new URL(r("kyEFX").resolve("kx99P"),import.meta.url).toString();const c=t=>t.map((({_id:t,book_image:n,title:o,author:r})=>`<li class="card" data-book="${t}">\n        <div class="card__thumb">\n            <img src="${n||e(i)}" loading="lazy" alt="${o}" class="card__img">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">${o}</h3>\n        <h4 class="card__author">${r}</h4>\n    </li>`)).join("");a=r("fAODQ");const d=e=>{const t=e.split(" "),n=t[t.length-1],o=t.slice(0,-1).join(" ");a.refs.categoryTitle.innerHTML=`${o} <span class="books__title-last">${n}</span>`};var l=r("43IiB"),m=r("dbSHG");const g=async()=>{(0,l.startLoading)(),d("Best sellers books");try{const e=await(0,s.getTopBooks)();a.refs.booksHandler.innerHTML=e.map((({list_name:e,books:t})=>`<div class="category" data-category="${e}">\n        <h2 class="category__title">${e}</h2>\n        <ul class="category__list">\n            ${c(t)}\n        </ul>\n        <button class="btn--violet category__btn" data-category="${e}">see more</button>\n        </div>`)).join("")}catch(e){a.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...")}(0,l.removeLoading)()};a.refs.booksHandler&&window.addEventListener("load",g);a=r("fAODQ");const u=()=>{window.scroll({top:0,behavior:"smooth"})};new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?a.refs.scrollTopBtn.classList.add("hidden"):a.refs.scrollTopBtn.classList.remove("hidden")}))})).observe(a.refs.scrollTopTarget),a.refs.scrollTopBtn.addEventListener("click",u),r("j5dhk");a=r("fAODQ"),s=r("2e5nt"),l=r("43IiB"),m=r("dbSHG");const v=e=>{document.querySelector(".active-category").classList.remove("active-category"),document.querySelectorAll(".categories__item").forEach((t=>{t.dataset.category===e&&t.classList.add("active-category")}))},k=async e=>{if("BUTTON"!==e.target.nodeName&&"LI"!==e.target.nodeName)return;const t=e.target.dataset.category;if(v(t),"all"!==t){(0,l.startLoading)();try{d(t);const e=await(0,s.getBooksOfCertainCategory)(t);a.refs.booksHandler.innerHTML=`<ul class="books__list">${c(e)}</ul>`,u()}catch(e){a.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...")}(0,l.removeLoading)()}else g()};a.refs.booksHandler.addEventListener("click",k),a.refs.allCategoriesList.addEventListener("click",k);a=r("fAODQ"),a=r("fAODQ");var f=r("2ix2C");function p(e){if(e.target.classList.contains("btn-add-list"))try{(0,f.addToShopList)(e),console.log("hooray")}catch(e){console.log(e)}}r("fAODQ");f=r("2ix2C");function b(e){if(e.target.classList.contains("btn-remove-list"))try{(0,f.rmvFrmShopList)(e)}catch(e){console.log(e)}}function h(e){"Escape"===e.code&&(a.refs.backdrop.classList.add("is-hidden"),a.refs.backdrop.removeEventListener("click",b),a.refs.backdrop.removeEventListener("click",p),a.refs.backdrop.removeEventListener("click",L),window.removeEventListener("keydown",h))}const _=e=>{"Escape"===e.code&&y(e)};function L(e){(e.target.closest(".modal__btn-close")||e.target.classList.contains("backdrop"))&&(a.refs.backdrop.classList.add("is-hidden"),a.refs.backdrop.removeEventListener("click",b),a.refs.backdrop.removeEventListener("click",p),a.refs.backdrop.removeEventListener("click",L),window.removeEventListener("keydown",h))}const y=()=>{document.querySelector(".modal-overlay.open .login__switch").removeEventListener("click",S);const e=document.querySelector(".modal-overlay.open");e.classList.remove("open"),document.body.classList.remove("lock"),e.removeEventListener("click",E),e.removeEventListener("click",w),e.addEventListener("keydown",_)},E=e=>{e.target.closest("button")&&e.target.closest("button").classList.contains("modal__close")&&y(e)},w=e=>{e.target===e.currentTarget&&e.target.classList.contains("modal-overlay")&&y(e)};a=r("fAODQ");const H=e=>{e.classList.add("open"),document.body.classList.add("lock"),e.addEventListener("click",E),e.addEventListener("click",w),window.addEventListener("keydown",_);document.querySelector(".modal-overlay.open .login__switch").addEventListener("click",S)};function S(e){if(!e.target.dataset.login)return;if(e.target.classList.contains("active-label"))return;y();const t=e.target.dataset.login;H(document.querySelector(`.js-${t}`))}a.refs.loginModalOpenBtns&&a.refs.loginModalOpenBtns.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.login;let n;if("sign-up"===t)n=a.refs.signUpModal;else{if("sign-in"!==t)return;n=a.refs.signInModal}H(n)}));let A=document.querySelector("input[name=theme_switch]");window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),A.checked=!0):(document.documentElement.setAttribute("data-theme","light"),A.checked=!1),A.addEventListener("change",(e=>{document.documentElement.setAttribute("data-theme",e.target.checked?"dark":"light")})),window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),A.checked=!0):(document.documentElement.setAttribute("data-theme","light"),A.checked=!1),A.addEventListener("change",(e=>{const t=e.target.checked?"dark":"light";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}));const $=localStorage.getItem("theme");$&&(document.documentElement.setAttribute("data-theme",$),A.checked="dark"===$);var T;a=r("fAODQ"),s=r("2e5nt");T=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var O;O=new URL(r("kyEFX").resolve("4tfg6"),import.meta.url).toString();var B;B=new URL(r("kyEFX").resolve("cv7CL"),import.meta.url).toString();var M;function F({_id:t,book_image:n,title:o,author:r,description:s,amazon_product_url:a,buy_links:c}){const d=c.filter((e=>"Apple Books"===e.name)),l=c.filter((e=>"Bookshop"===e.name));return`<div class="modal">\n        <button class="modal__btn-close" type="button" data-modal-close>\n          <svg class="end" width="12" height="12">\n            <use href="${e(M)}#icon-close"></use>\n          </svg>\n        </button>\n        <div class="modal-card__thumb" data-book="${t}">\n        <img class="book_img card__img" src="${n||e(i)}" alt="${o}" loading="lazy">\n        <h2 class="modal-card__title">${o}</h2>\n        <p class="modal-card__author">${r}</p>\n        <div class="modal-card__descriprion">${s}</div>\n        <ul class="modal-card__links-shop">\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${a}"><img class="amazon-img" src="${e(T)}" alt=""></a></li>\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${d[0].url}"><img class="book1_img" src="${e(O)}" alt=""></a></li>\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${l[0].url}"><img class="book2_img" src="${e(B)}" alt=""></a></li>\n        </ul>\n        <div class="add_to_list">\n          <button class="btn-add-list" type="button">add to shopping list</button>\n        </div>\n        <div class="remove_from_list">\n        <button class="btn-remove-list" type="button">remove from the shopping list</button>\n        <div class="modal-notification">\n          Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n        </div>\n      </div>\n    </div>\n</div>`}M=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();l=r("43IiB"),m=r("dbSHG");a.refs.booksHandler.addEventListener("click",(async e=>{if(!e.target.closest(".card"))return;a.refs.backdrop.innerHTML="",a.refs.backdrop.classList.remove("is-hidden"),(0,l.startLoading)();const t=e.target.closest(".card").dataset.book;try{const e=await(0,s.getOneBookById)(t);a.refs.backdrop.innerHTML=F(e)}catch(e){a.refs.backdrop.innerHTML=(0,m.renderError)("This page is empty, add some books and proceed to order.")}a.refs.backdrop.addEventListener("click",p),a.refs.backdrop.addEventListener("click",b),a.refs.backdrop.addEventListener("click",L),window.addEventListener("keydown",h),(0,l.removeLoading)()}));
//# sourceMappingURL=index.9253f111.js.map
