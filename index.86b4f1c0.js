function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.86b4f1c0.js","kx99P":"sample.eaf37d8e.png","1yVwl":"amazon.8e8667c1.png","4tfg6":"book1.8d01f172.png","cv7CL":"book2.b226e49c.png","8OQ7p":"icons.7429e8d9.svg","4l2W5":"index.0576f071.js"}')),a("fAODQ"),a("3oIZ9"),a("2ix2C");var s=a("2e5nt"),r=a("fAODQ");window.addEventListener("load",(async function(){try{const e=await(0,s.getCategoryList)();r.refs.allCategoriesList.insertAdjacentHTML("beforeend",e.map((({list_name:e})=>`<li class="categories__item" data-category="${e}">${e}</li>`)).join(""))}catch(e){console.log(e)}})),a("7dwgr");var i;s=a("2e5nt"),r=a("fAODQ");i=new URL(a("kyEFX").resolve("kx99P"),import.meta.url).toString();const l=t=>t.map((({_id:t,book_image:o,title:n,author:a})=>`<li class="card" data-book="${t}">\n        <div class="card__thumb">\n            <img src="${o||e(i)}" loading="lazy" alt="${n}" class="card__img" width="180">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">${n}</h3>\n        <h4 class="card__author">${a}</h4>\n    </li>`)).join("");r=a("fAODQ");const d=e=>{const t=e.split(" "),o=t[t.length-1],n=t.slice(0,-1).join(" ");r.refs.categoryTitle.innerHTML=`${n} <span class="books__title-last">${o}</span>`};var c=a("43IiB"),b=a("dbSHG");const m=async()=>{(0,c.startLoading)(),d("Best sellers books");try{const e=await(0,s.getTopBooks)();r.refs.booksHandler.innerHTML=e.map((({list_name:e,books:t})=>`<div class="category" data-category="${e}">\n        <h2 class="category__title">${e}</h2>\n        <ul class="category__list">\n            ${l(t)}\n        </ul>\n        <button class="btn--violet category__btn" data-category="${e}">see more</button>\n        </div>`)).join("")}catch(e){r.refs.booksHandler.innerHTML=(0,b.renderError)("Something went wrong...")}(0,c.removeLoading)()};r.refs.booksHandler&&window.addEventListener("load",m),a("h0oKa"),a("j5dhk");r=a("fAODQ"),s=a("2e5nt"),c=a("43IiB"),b=a("dbSHG");var g=a("h0oKa");const u=e=>{document.querySelector(".active-category").classList.remove("active-category"),document.querySelectorAll(".categories__item").forEach((t=>{t.dataset.category===e&&t.classList.add("active-category")}))},k=async e=>{if("BUTTON"!==e.target.nodeName&&"LI"!==e.target.nodeName)return;const t=e.target.dataset.category;if(u(t),"all"!==t){(0,c.startLoading)();try{d(t);const e=await(0,s.getBooksOfCertainCategory)(t);r.refs.booksHandler.innerHTML=`<ul class="books__list">${l(e)}</ul>`,(0,g.scrollToTop)()}catch(e){r.refs.booksHandler.innerHTML=(0,b.renderError)("Something went wrong...")}(0,c.removeLoading)()}else m()};r.refs.booksHandler.addEventListener("click",k),r.refs.allCategoriesList.addEventListener("click",k);r=a("fAODQ"),r=a("fAODQ");var p=a("2ix2C");function v(e){if("BUTTON"!==e.target.nodeName)return;const t=document.querySelector(".modal-book__btns");if("add"===e.target.dataset.action)try{(0,p.addToShopList)(e),e.target.dataset.action="delete",e.target.ariaLabel="delete",e.target.textContent="remove from shopping list",t.insertAdjacentHTML("beforeend",'<p class="modal-book__notification">\n      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n    </p>')}catch(e){console.log(e)}else if("delete"===e.target.dataset.action)try{(0,p.rmvFrmShopList)(e),e.target.dataset.action="add",e.target.ariaLabel="add",e.target.textContent="add to the shopping list",document.querySelector(".modal-book__notification").remove()}catch(e){console.log(e)}}a("fAODQ");p=a("2ix2C");function _(e){if(e.target.classList.contains("btn-remove-list"))try{(0,p.rmvFrmShopList)(e)}catch(e){console.log(e)}}function f(e){"Escape"===e.code&&(r.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("lock"),r.refs.backdrop.removeEventListener("click",_),r.refs.backdrop.removeEventListener("click",v),r.refs.backdrop.removeEventListener("click",w),window.removeEventListener("keydown",f))}const h=e=>{"Escape"===e.code&&E(e)},L=e=>{e.target===e.currentTarget&&e.target.classList.contains("modal-overlay")&&E(e)},y=e=>{e.target===e.currentTarget&&w()};function w(){const e=document.querySelector("[data-modal-close]");r.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("lock"),e.removeEventListener("click",w),r.refs.backdrop.removeEventListener("click",y),window.removeEventListener("keydown",f);const t=document.querySelector(".modal-book__btn");!1===t.disabled&&t.removeEventListener("click",v)}const E=()=>{document.querySelector(".modal-overlay.open .login__switch").removeEventListener("click",$);const e=document.querySelector(".modal-overlay.open");e.classList.remove("open"),document.body.classList.remove("lock"),e.removeEventListener("click",H),e.removeEventListener("click",L),e.addEventListener("keydown",h)},H=e=>{e.target.closest("button")&&e.target.closest("button").classList.contains("modal__close")&&E(e)};r=a("fAODQ");const S=e=>{e.classList.add("open"),document.body.classList.add("lock"),e.addEventListener("click",H),e.addEventListener("click",L),window.addEventListener("keydown",h);document.querySelector(".modal-overlay.open .login__switch").addEventListener("click",$)};function T(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.login;let o;if("sign-up"===t)o=r.refs.signUpModal;else{if("sign-in"!==t)return;o=r.refs.signInModal}S(o)}function $(e){if(!e.target.dataset.login)return;if(e.target.classList.contains("active-label"))return;E();const t=e.target.dataset.login;S(document.querySelector(`.js-${t}`))}r.refs.elmsNonAuth&&r.refs.elmsNonAuth.forEach((e=>e.addEventListener("click",T))),a("4QsFx");var A;r=a("fAODQ"),s=a("2e5nt");A=new URL(a("kyEFX").resolve("1yVwl"),import.meta.url).toString();var O;O=new URL(a("kyEFX").resolve("4tfg6"),import.meta.url).toString();var x;x=new URL(a("kyEFX").resolve("cv7CL"),import.meta.url).toString();var C;function F({_id:t,book_image:o,title:n,author:a,description:s,amazon_product_url:r,buy_links:l}){const d=l.filter((e=>"Apple Books"===e.name)),c=l.filter((e=>"Bookshop"===e.name));return`<div class="modal-book">\n  <button class="modal-book__close" type="button" data-modal-close>\n    <svg class="modal-book__close-icon" width="24" height="24">\n      <use href="${e(C)}#icon-close"></use>\n    </svg>\n  </button>\n  <div class="modal-book__content" data-book="${t}">\n      <div class="modal-book--flex">\n          <div class="modal-book__thumb">\n              <img class="modal-book__img" src="${o||e(i)}" alt="${n}" loading="lazy" width="192">\n          </div>\n          <div class="modal-book__text">\n              <h2 class="modal-book__title">${n}</h2>\n              <p class="modal-book__author">${a}</p>\n              <p class="modal-book__description">${s||"Unfortunately, there is no description."}</p>\n              <ul class="modal-book__links">\n                <li><a target="_blank" rel="noopener noreferrer" href="${r}">\n                  <img class="amazon" src="${e(A)}" alt="amazon-logo" width="62"></a></li>\n                <li><a target="_blank" rel="noopener noreferrer" href="${d[0].url}">\n                  <img class="book-first"src="${e(O)}" alt="apple-shop" width="33"></a></li>\n                <li><a target="_blank" rel="noopener noreferrer" href="${c[0].url}">\n                  <img class="book-second"src="${e(x)}" alt="bookskop" width="38"></a></li>\n              </ul>\n          </div>\n      </div>\n      <div class="modal-book__btns"></div>\n    </div>\n</div>`}C=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString(),a("43IiB");b=a("dbSHG"),r=a("fAODQ");p=a("2ix2C");const M=async e=>{const t=await(0,s.getOneBookById)(e);r.refs.backdrop.innerHTML=F(t);const o=document.querySelector(".modal-book__btns");if(p.userCurrent)try{const t=await(0,p.getBksFrmShpLst)();t&&t.includes(e)?o.innerHTML='<button class="btn--violet modal-book__btn" type="button" data-action="delete" id="al" aria-label="delete">remove from the shopping list</button>\n    <p class="modal-book__notification">\n      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n    </p>':o.innerHTML='<button class="btn--violet modal-book__btn" type="button" data-action="add" id="al" aria-label="add">add to shopping list</button>'}catch(e){o.innerHTML='<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>\n    <p class="modal-book__notification">\n     Something went wrong.\n    </p>'}else o.innerHTML='<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>\n    <p class="modal-book__notification">\n     You need to sign in to be able to add books to your shopping list.\n    </p>';document.querySelector("[data-modal-close]").addEventListener("click",w),r.refs.backdrop.addEventListener("click",y),document.body.classList.add("lock"),window.addEventListener("keydown",f);const n=document.querySelector(".modal-book__btn");!1===n.disabled&&n.addEventListener("click",v),r.refs.backdrop.classList.remove("is-hidden")};r.refs.booksHandler&&r.refs.booksHandler.addEventListener("click",(async e=>{if(!e.target.closest(".card"))return;r.refs.backdrop.innerHTML="";const t=e.target.closest(".card").dataset.book;try{M(t)}catch(e){r.refs.backdrop.innerHTML=(0,b.renderError)("Something went wrong")}})),a("2CaxW"),a("3JLWw"),a("7Lfud"),a("1VOaQ");
//# sourceMappingURL=index.86b4f1c0.js.map