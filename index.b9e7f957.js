!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.b9e7f957.js","6Hg8L":"sample.eaf37d8e.png","aaLHb":"amazon.8e8667c1.png","5yJ2I":"book1.8d01f172.png","kAnhc":"book2.b226e49c.png","410VS":"icons.7429e8d9.svg","cfiU8":"index.95277310.js"}')),a("9EY00"),a("gjDBM"),a("iNWLi");var r=a("bpxeT"),s=a("2TvXO"),c=a("laqZe"),i=a("9EY00"),l=function(e){return e.map((function(e){var t=e.list_name;return'<li class="categories__item" data-category="'.concat(t,'">').concat(t,"</li>")})).join("")};function d(){return(d=e(r)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.getCategoryList)();case 3:n=e.sent,i.refs.allCategoriesList.insertAdjacentHTML("beforeend",l(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}window.addEventListener("load",(function(){return d.apply(this,arguments)})),a("iSHBX");var u;r=a("bpxeT"),s=a("2TvXO"),c=a("laqZe"),i=a("9EY00");u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6Hg8L");var b,v=function(t){return t.map((function(t){var n=t._id,o=t.book_image,a=t.title,r=t.author;return'<li class="card" data-book="'.concat(n,'">\n        <div class="card__thumb">\n            <img src="').concat(o||e(u),'" loading="lazy" alt="').concat(a,'" class="card__img" width="180">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">').concat(a,'</h3>\n        <h4 class="card__author">').concat(r,"</h4>\n    </li>")})).join("")},p=(i=a("9EY00"),function(e){var t=e.split(" "),n=t[t.length-1],o=t.slice(0,-1).join(" ");i.refs.categoryTitle.innerHTML="".concat(o,' <span class="books__title-last">').concat(n,"</span>")}),f=a("bi3nC"),g=a("3sQwF"),m=(b=e(r)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,f.startLoading)(),p("Best sellers books"),e.prev=2,e.next=5,(0,c.getTopBooks)();case 5:n=e.sent,i.refs.booksHandler.innerHTML=n.map((function(e){var t=e.list_name,n=e.books;return'<div class="category" data-category="'.concat(t,'">\n        <h2 class="category__title">').concat(t,'</h2>\n        <ul class="category__list">\n            ').concat(v(n),'\n        </ul>\n        <button class="btn--violet category__btn" data-category="').concat(t,'">see more</button>\n        </div>')})).join(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i.refs.booksHandler.innerHTML=(0,g.renderError)("Something went wrong...");case 12:(0,f.removeLoading)();case 13:case"end":return e.stop()}}),t,null,[[2,9]])}))),function(){return b.apply(this,arguments)});i.refs.booksHandler&&window.addEventListener("load",m),a("bKWtT"),a("56px5");r=a("bpxeT"),s=a("2TvXO"),i=a("9EY00"),c=a("laqZe"),f=a("bi3nC"),g=a("3sQwF");var k=a("bKWtT"),_=function(e){document.querySelector(".active-category").classList.remove("active-category"),document.querySelectorAll(".categories__item").forEach((function(t){t.dataset.category===e&&t.classList.add("active-category")}))},h=function(){var t=e(r)(e(s).mark((function t(n){var o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName||"LI"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(o=n.target.dataset.category,_(o),"all"!==o){e.next=7;break}return m(),e.abrupt("return");case 7:return(0,f.startLoading)(),e.prev=8,p(o),e.next=12,(0,c.getBooksOfCertainCategory)(o);case 12:a=e.sent,i.refs.booksHandler.innerHTML='<ul class="books__list">'.concat(v(a),"</ul>"),(0,k.scrollToTop)(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),i.refs.booksHandler.innerHTML=(0,g.renderError)("Something went wrong...");case 20:(0,f.removeLoading)();case 21:case"end":return e.stop()}}),t,null,[[8,17]])})));return function(e){return t.apply(this,arguments)}}();i.refs.booksHandler.addEventListener("click",h),i.refs.allCategoriesList.addEventListener("click",h);i=a("9EY00"),i=a("9EY00");var L=a("iNWLi");function y(e){if("BUTTON"===e.target.nodeName){var t=document.querySelector(".modal-book__btns");if("add"===e.target.dataset.action)try{(0,L.addToShopList)(e),e.target.dataset.action="delete",e.target.ariaLabel="delete",e.target.textContent="remove from shopping list",t.insertAdjacentHTML("beforeend",'<p class="modal-book__notification">\n      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n    </p>')}catch(e){console.log(e)}else if("delete"===e.target.dataset.action)try{(0,L.rmvFrmShopList)(e),e.target.dataset.action="add",e.target.ariaLabel="add",e.target.textContent="add to the shopping list",document.querySelector(".modal-book__notification").remove()}catch(e){console.log(e)}}}a("9EY00");L=a("iNWLi");function E(e){if(e.target.classList.contains("btn-remove-list"))try{(0,L.rmvFrmShopList)(e)}catch(e){console.log(e)}}function w(e){"Escape"===e.code&&(i.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("lock"),i.refs.backdrop.removeEventListener("click",E),i.refs.backdrop.removeEventListener("click",y),i.refs.backdrop.removeEventListener("click",S),window.removeEventListener("keydown",w))}var H=function(e){"Escape"===e.code&&q(e)},T=function(e){e.target===e.currentTarget&&e.target.classList.contains("modal-overlay")&&q(e)},x=function(e){e.target===e.currentTarget&&S()};function S(){var e=document.querySelector("[data-modal-close]");i.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("lock"),e.removeEventListener("click",S),i.refs.backdrop.removeEventListener("click",x),window.removeEventListener("keydown",w);var t=document.querySelector(".modal-book__btn");!1===t.disabled&&t.removeEventListener("click",y)}var q=function(){document.querySelector(".modal-overlay.open .login__switch").removeEventListener("click",B);var e=document.querySelector(".modal-overlay.open");e.classList.remove("open"),document.body.classList.remove("lock"),e.removeEventListener("click",N),e.removeEventListener("click",T),e.addEventListener("keydown",H)},N=function(e){e.target.closest("button")&&e.target.closest("button").classList.contains("modal__close")&&q(e)},C=(i=a("9EY00"),function(e){e.classList.add("open"),document.body.classList.add("lock"),e.addEventListener("click",N),e.addEventListener("click",T),window.addEventListener("keydown",H),document.querySelector(".modal-overlay.open .login__switch").addEventListener("click",B)});function O(e){if("BUTTON"===e.target.nodeName){var t,n=e.target.dataset.login;if("sign-up"===n)t=i.refs.signUpModal;else{if("sign-in"!==n)return;t=i.refs.signInModal}C(t)}}function B(e){if(e.target.dataset.login&&!e.target.classList.contains("active-label")){q();var t=e.target.dataset.login;C(document.querySelector(".js-".concat(t)))}}i.refs.elmsNonAuth&&i.refs.elmsNonAuth.forEach((function(e){return e.addEventListener("click",O)})),a("jCI1E");var M;r=a("bpxeT"),s=a("2TvXO"),i=a("9EY00"),c=a("laqZe");M=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("aaLHb");var R;R=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("5yJ2I");var A;A=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("kAnhc");var F;F=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");f=a("bi3nC"),g=a("3sQwF");var Y=a("6JpON"),j=(i=a("9EY00"),L=a("iNWLi"),function(){var t=e(r)(e(s).mark((function t(n){var o,a,r,l;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,f.LoaderBackdropStart)(),t.prev=1,t.next=4,(0,c.getOneBookById)(n);case 4:if(o=t.sent,i.refs.backdrop.innerHTML=(d=void 0,b=void 0,v=void 0,p=void 0,g=void 0,m=void 0,k=void 0,_=void 0,h=void 0,d=(s=o)._id,b=s.book_image,v=s.title,p=s.author,g=s.description,m=s.amazon_product_url,k=s.buy_links,_=k.find((function(e){return"Apple Books"===e.name})),h=k.find((function(e){return"Bookshop"===e.name})),'<div class="modal-book">\n  <button class="modal-book__close" type="button" data-modal-close>\n    <svg class="modal-book__close-icon" width="24" height="24">\n      <use href="'.concat(e(F),'#icon-close"></use>\n    </svg>\n  </button>\n  <div class="modal-book__content" data-book="').concat(d,'">\n      <div class="modal-book--flex">\n          <div class="modal-book__thumb">\n              <img class="modal-book__img" src="').concat(b||e(u),'" alt="').concat(v,'" loading="lazy" width="192">\n          </div>\n          <div class="modal-book__text">\n              <h2 class="modal-book__title">').concat(v,'</h2>\n              <p class="modal-book__author">').concat(p,'</p>\n              <p class="modal-book__description">').concat(g||"Unfortunately, there is no description.",'</p>\n              <ul class="modal-book__links">\n                <li><a target="_blank" rel="noopener noreferrer" href="').concat(m,'" class="modal-book__link">\n                  <img class="amazon" src="').concat(e(M),'" alt="amazon-logo" width="62"></a></li>\n                <li><a target="_blank" rel="noopener noreferrer" href="').concat(_.url,'" class="modal-book__link">\n                  <img class="book-first"src="').concat(e(R),'" alt="apple-shop" width="33"></a></li>\n                <li><a target="_blank" rel="noopener noreferrer" href="').concat(h.url,'" class="modal-book__link">\n                  <img class="book-second"src="').concat(e(A),'" alt="bookskop" width="38"></a></li>\n              </ul>\n          </div>\n      </div>\n      <div class="modal-book__btns"></div>\n    </div>\n</div>')),a=document.querySelector(".modal-book__btns"),L.userCurrent){t.next=11;break}a.innerHTML='<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>\n    <p class="modal-book__notification">\n     You need to sign in to be able to add books to your shopping list.\n    </p>',t.next=21;break;case 11:return t.prev=11,t.next=14,(0,L.getBksFrmShpLst)();case 14:(r=t.sent)&&r.includes(n)?a.innerHTML='<button class="btn--violet modal-book__btn" type="button" data-action="delete" aria-label="delete">remove from the shopping list</button>\n    <p class="modal-book__notification">\n      Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.\n    </p>':a.innerHTML='<button class="btn--violet modal-book__btn" type="button" data-action="add" aria-label="add">add to shopping list</button>',t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),a.innerHTML='<button class="btn--violet modal-book__btn" type="button" disabled>add to shopping list</button>\n    <p class="modal-book__notification">\n     Something went wrong.\n    </p>';case 21:document.querySelector("[data-modal-close]").addEventListener("click",S),i.refs.backdrop.addEventListener("click",x),document.body.classList.add("lock"),window.addEventListener("keydown",w),!1===(l=document.querySelector(".modal-book__btn")).disabled&&l.addEventListener("click",y),i.refs.backdrop.classList.remove("is-hidden"),(0,f.removeLoading)(),t.next=36;break;case 32:t.prev=32,t.t1=t.catch(1),Y.Notify.failure("Oops, something went wrong"),(0,f.removeLoading)();case 36:case"end":return t.stop()}var s,d,b,v,p,g,m,k,_,h}),t,null,[[1,32],[11,18]])})));return function(e){return t.apply(this,arguments)}}()),U=function(){var t=e(r)(e(s).mark((function t(n){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.closest(".card")){e.next=3;break}return(0,f.removeLoading)(),e.abrupt("return");case 3:i.refs.backdrop.innerHTML="",o=n.target.closest(".card").dataset.book;try{j(o)}catch(e){i.refs.backdrop.innerHTML=(0,g.renderError)("Something went wrong")}case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();i.refs.booksHandler&&i.refs.booksHandler.addEventListener("click",U),a("eC6fe"),a("8hxDN"),a("h5rFk"),a("dsadE"),a("hGGPj"),a("b2ysT"),a("jnqzC")}();
//# sourceMappingURL=index.b9e7f957.js.map