function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.ea19a752.js","kx99P":"sample.eaf37d8e.png","1yVwl":"amazon.8e8667c1.png","4tfg6":"book1.8d01f172.png","cv7CL":"book2.b226e49c.png","8OQ7p":"icons.78137695.svg","4l2W5":"index.532a0995.js"}')),a("fAODQ"),a("3oIZ9"),a("2ix2C");var r=a("2e5nt"),s=a("fAODQ");window.addEventListener("load",(async function(){try{const e=await(0,r.getCategoryList)();s.refs.allCategoriesList.insertAdjacentHTML("beforeend",e.map((({list_name:e})=>`<li class="categories__item" data-category="${e}">${e}</li>`)).join(""))}catch(e){console.log(e)}})),a("7dwgr");var i;r=a("2e5nt"),s=a("fAODQ");i=new URL(a("kyEFX").resolve("kx99P"),import.meta.url).toString();const c=t=>t.map((({_id:t,book_image:o,title:n,author:a})=>`<li class="card" data-book="${t}">\n        <div class="card__thumb">\n            <img src="${o||e(i)}" loading="lazy" alt="${n}" class="card__img">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">${n}</h3>\n        <h4 class="card__author">${a}</h4>\n    </li>`)).join("");s=a("fAODQ");const d=e=>{const t=e.split(" "),o=t[t.length-1],n=t.slice(0,-1).join(" ");s.refs.categoryTitle.innerHTML=`${n} <span class="books__title-last">${o}</span>`};var l=a("43IiB"),m=a("dbSHG");const g=async()=>{(0,l.startLoading)(),d("Best sellers books");try{const e=await(0,r.getTopBooks)();s.refs.booksHandler.innerHTML=e.map((({list_name:e,books:t})=>`<div class="category" data-category="${e}">\n        <h2 class="category__title">${e}</h2>\n        <ul class="category__list">\n            ${c(t)}\n        </ul>\n        <button class="btn--violet category__btn" data-category="${e}">see more</button>\n        </div>`)).join("")}catch(e){s.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...")}(0,l.removeLoading)()};s.refs.booksHandler&&window.addEventListener("load",g);s=a("fAODQ");const u=()=>{window.scroll({top:0,behavior:"smooth"})};new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?s.refs.scrollTopBtn.classList.add("hidden"):s.refs.scrollTopBtn.classList.remove("hidden")}))})).observe(s.refs.scrollTopTarget),s.refs.scrollTopBtn.addEventListener("click",u),a("j5dhk");s=a("fAODQ"),r=a("2e5nt"),l=a("43IiB"),m=a("dbSHG");const h=e=>{document.querySelector(".active-category").classList.remove("active-category"),document.querySelectorAll(".categories__item").forEach((t=>{t.dataset.category===e&&t.classList.add("active-category")}))},k=async e=>{if("BUTTON"!==e.target.nodeName&&"LI"!==e.target.nodeName)return;const t=e.target.dataset.category;if(h(t),"all"!==t){(0,l.startLoading)();try{d(t);const e=await(0,r.getBooksOfCertainCategory)(t);s.refs.booksHandler.innerHTML=`<ul class="books__list">${c(e)}</ul>`,u()}catch(e){s.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...")}(0,l.removeLoading)()}else g()};s.refs.booksHandler.addEventListener("click",k),s.refs.allCategoriesList.addEventListener("click",k);let p=document.querySelector("input[name=theme_switch]");window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),p.checked=!0):(document.documentElement.setAttribute("data-theme","light"),p.checked=!1),p.addEventListener("change",(e=>{document.documentElement.setAttribute("data-theme",e.target.checked?"dark":"light")})),window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),p.checked=!0):(document.documentElement.setAttribute("data-theme","light"),p.checked=!1),p.addEventListener("change",(e=>{const t=e.target.checked?"dark":"light";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}));const b=localStorage.getItem("theme");b&&(document.documentElement.setAttribute("data-theme",b),p.checked="dark"===b);var f;s=a("fAODQ"),r=a("2e5nt");f=new URL(a("kyEFX").resolve("1yVwl"),import.meta.url).toString();var _;_=new URL(a("kyEFX").resolve("4tfg6"),import.meta.url).toString();var v;v=new URL(a("kyEFX").resolve("cv7CL"),import.meta.url).toString();var L;function y({_id:t,book_image:o,title:n,author:a,description:r,amazon_product_url:s,buy_links:c}){const d=c.filter((e=>"Apple Books"===e.name)),l=c.filter((e=>"Bookshop"===e.name));return`<div class="modal">\n        <button class="modal__btn-close" type="button" data-modal-close>\n          <svg class="end" width="12" height="12">\n            <use href="${e(L)}#icon-close"></use>\n          </svg>\n        </button>\n        <div class="modal-card__thumb" data-book="${t}">\n        <img class="book_img card__img" src="${o||e(i)}" alt="${n}" loading="lazy">\n        <h2 class="modal-card__title">${n}</h2>\n        <p class="modal-card__author">${a}</p>\n        <div class="modal-card__descriprion">${r}</div>\n        <ul class="modal-card__links-shop">\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${s}"><img class="amazon-img" src="${e(f)}" alt=""></a></li>\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${d[0].url}"><img class="book1_img" src="${e(_)}" alt=""></a></li>\n          <li><a class="shopping-links_link" target="_blank" rel="noopener noreferrer" href="${l[0].url}"><img class="book2_img" src="${e(v)}" alt=""></a></li>\n        </ul>\n        <div class="add_to_list">\n          <button class="btn-add-list" type="button">add to shopping list</button>\n        </div>\n        <div class="remove_from_list">\n        <button class="btn-remove-list" type="button">remove from the shopping list</button>\n        <div class="modal-notification">\n          Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n        </div>\n      </div>\n    </div>\n</div>`}L=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();l=a("43IiB"),m=a("dbSHG"),s=a("fAODQ"),s=a("fAODQ");var w=a("2ix2C");function E(e){if(e.target.classList.contains("btn-add-list"))try{(0,w.addToShopList)(e),console.log("hooray")}catch(e){console.log(e)}}function H(e){"Escape"===e.code&&(s.refs.backdrop.classList.add("is-hidden"),s.refs.backdrop.removeEventListener("click",E),s.refs.backdrop.removeEventListener("click",$),window.removeEventListener("keydown",H))}function $(e){(e.target.closest(".modal__btn-close")||e.target.classList.contains("backdrop"))&&(s.refs.backdrop.classList.add("is-hidden"),s.refs.backdrop.removeEventListener("click",E),s.refs.backdrop.removeEventListener("click",$),window.removeEventListener("keydown",H))}s.refs.booksHandler.addEventListener("click",(async e=>{if(!e.target.closest(".card"))return;s.refs.backdrop.innerHTML="",s.refs.backdrop.classList.remove("is-hidden"),(0,l.startLoading)();const t=e.target.closest(".card").dataset.book;try{const e=await(0,r.getOneBookById)(t);s.refs.backdrop.innerHTML=y(e)}catch(e){s.refs.backdrop.innerHTML=(0,m.renderError)("This page is empty, add some books and proceed to order.")}s.refs.backdrop.addEventListener("click",E),s.refs.backdrop.addEventListener("click",$),window.addEventListener("keydown",H),(0,l.removeLoading)()}));
//# sourceMappingURL=index.ea19a752.js.map
