!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in s){var n=s[e];delete s[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){s[e]=n},n.parcelRequired7c6=t),t("iE7OH").register(JSON.parse('{"EVgbq":"index.d7e00fc6.js","6Hg8L":"sample.eaf37d8e.png","ge42F":"index.247a2c5d.js"}')),t("9EY00");var o=t("9EY00");console.log(o.refs.mobileMenu),console.log(o.refs.burger),o.refs.burger.addEventListener("click",(function(){o.refs.mobileMenu.classList.contains("showMenu")?(o.refs.mobileMenu.classList.remove("showMenu"),o.refs.burgerCloseIcon.classList.add("hideButton"),o.refs.burgerCloseIcon.classList.remove("showButton"),o.refs.burgerMenuIcon.classList.add("showButton"),o.refs.burgerMenuIcon.classList.remove("hideButton")):(o.refs.mobileMenu.classList.add("showMenu"),o.refs.burgerCloseIcon.classList.add("showButton"),o.refs.burgerCloseIcon.classList.remove("hideButton"),o.refs.burgerMenuIcon.classList.add("hideButton"),o.refs.burgerMenuIcon.classList.remove("showButton"))})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(o.refs.mobileMenu.classList.remove("showMenu"),o.refs.burgerCloseIcon.classList.add("hideButton"),o.refs.burgerCloseIcon.classList.remove("showButton"),o.refs.burgerMenuIcon.classList.add("showButton"),o.refs.burgerMenuIcon.classList.remove("hideButton"))}));var a,c=t("bpxeT"),i=t("2TvXO"),l=t("laqZe");o=t("9EY00");a=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("6Hg8L");var d,u=function(e){var n=new URL(a);return e.map((function(e){var r=e._id,s=e.book_image,t=e.title,o=e.author;return'<li class="card" data-book="'.concat(r,'">\n        <div class="card__thumb">\n            <img src="').concat(s||n,'" loading="lazy" alt="').concat(t,'" class="card__img">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">').concat(t,'</h3>\n        <h4 class="card__author">').concat(o,"</h4>\n    </li>")})).join("")},f=(o=t("9EY00"),function(e){var n=e.split(" "),r=n[n.length-1],s=n.slice(0,-1).join(" ");o.refs.categoryTitle.innerHTML="".concat(s,' <span class="books__title-last">').concat(r,"</span>")}),g=t("bi3nC"),b=t("3sQwF"),v=(d=e(c)(e(i).mark((function n(){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,g.startLoading)(),f("Best sellers books"),e.prev=2,e.next=5,(0,l.getTopBooks)();case 5:r=e.sent,o.refs.booksHandler.innerHTML=r.map((function(e){var n=e.list_name,r=e.books;return'<div class="category" data-category="'.concat(n,'">\n        <h2 class="category__title">').concat(n,'</h2>\n        <ul class="category__list">\n            ').concat(u(r),'\n        </ul>\n        <button class="btn--violet category__btn" data-category="').concat(n,'">see more</button>\n        </div>')})).join(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o.refs.booksHandler.innerHTML=(0,b.renderError)("Something went wrong...");case 12:(0,g.removeLoading)();case 13:case"end":return e.stop()}}),n,null,[[2,9]])}))),function(){return d.apply(this,arguments)});o.refs.booksHandler&&window.addEventListener("load",v);o=t("9EY00");var h=function(){window.scroll({top:0,behavior:"smooth"})};new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?o.refs.scrollTopBtn.classList.add("hidden"):o.refs.scrollTopBtn.classList.remove("hidden")}))})).observe(o.refs.scrollTopTarget),o.refs.scrollTopBtn.addEventListener("click",h);c=t("bpxeT"),i=t("2TvXO"),o=t("9EY00"),l=t("laqZe"),g=t("bi3nC"),b=t("3sQwF");var p=function(){var n=e(c)(e(i).mark((function n(r){var s,t;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return(0,g.startLoading)(),s=r.target.dataset.category,e.prev=4,e.next=7,(0,l.getBooksOfCertainCategory)(s);case 7:t=e.sent,f(s),o.refs.booksHandler.innerHTML='<ul class="books__list">'.concat(u(t),"</ul>"),h(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),o.refs.booksHandler.innerHTML=(0,b.renderError)("Something went wrong...");case 16:(0,g.removeLoading)();case 17:case"end":return e.stop()}}),n,null,[[4,13]])})));return function(e){return n.apply(this,arguments)}}();o.refs.booksHandler.addEventListener("click",p)}();
//# sourceMappingURL=index.d7e00fc6.js.map
