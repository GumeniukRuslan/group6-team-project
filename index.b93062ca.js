!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.b93062ca.js","6Hg8L":"sample.eaf37d8e.png","cfiU8":"index.735750b0.js"}')),a("9EY00"),a("gjDBM"),a("iNWLi");var o=a("bpxeT"),c=a("2TvXO"),s=a("laqZe"),i=a("9EY00"),d=function(e){return e.map((function(e){var t=e.list_name;return'<li class="categories__item">'.concat(t,"</li>")})).join("")};function l(){return(l=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getCategoryList)();case 3:n=e.sent,i.refs.allCategoriesList.insertAdjacentHTML("beforeend",d(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}window.addEventListener("load",(function(){return l.apply(this,arguments)})),a("iSHBX");var u;o=a("bpxeT"),c=a("2TvXO"),s=a("laqZe"),i=a("9EY00");u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("6Hg8L");var m,f=function(t){return t.map((function(t){var n=t._id,r=t.book_image,a=t.title,o=t.author;return'<li class="card" data-book="'.concat(n,'">\n        <div class="card__thumb">\n            <img src="').concat(r||e(u),'" loading="lazy" alt="').concat(a,'" class="card__img">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">').concat(a,'</h3>\n        <h4 class="card__author">').concat(o,"</h4>\n    </li>")})).join("")},h=(i=a("9EY00"),function(e){var t=e.split(" "),n=t[t.length-1],r=t.slice(0,-1).join(" ");i.refs.categoryTitle.innerHTML="".concat(r,' <span class="books__title-last">').concat(n,"</span>")}),p=a("bi3nC"),g=a("3sQwF"),v=(m=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,p.startLoading)(),h("Best sellers books"),e.prev=2,e.next=5,(0,s.getTopBooks)();case 5:n=e.sent,i.refs.booksHandler.innerHTML=n.map((function(e){var t=e.list_name,n=e.books;return'<div class="category" data-category="'.concat(t,'">\n        <h2 class="category__title">').concat(t,'</h2>\n        <ul class="category__list">\n            ').concat(f(n),'\n        </ul>\n        <button class="btn--violet category__btn" data-category="').concat(t,'">see more</button>\n        </div>')})).join(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i.refs.booksHandler.innerHTML=(0,g.renderError)("Something went wrong...");case 12:(0,p.removeLoading)();case 13:case"end":return e.stop()}}),t,null,[[2,9]])}))),function(){return m.apply(this,arguments)});i.refs.booksHandler&&window.addEventListener("load",v);i=a("9EY00");var b=function(){window.scroll({top:0,behavior:"smooth"})};new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?i.refs.scrollTopBtn.classList.add("hidden"):i.refs.scrollTopBtn.classList.remove("hidden")}))})).observe(i.refs.scrollTopTarget),i.refs.scrollTopBtn.addEventListener("click",b),a("56px5");o=a("bpxeT"),c=a("2TvXO"),i=a("9EY00"),s=a("laqZe"),p=a("bi3nC"),g=a("3sQwF");var _=function(){var t=e(o)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return(0,p.startLoading)(),r=n.target.dataset.category,e.prev=4,e.next=7,(0,s.getBooksOfCertainCategory)(r);case 7:a=e.sent,h(r),i.refs.booksHandler.innerHTML='<ul class="books__list">'.concat(f(a),"</ul>"),b(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),i.refs.booksHandler.innerHTML=(0,g.renderError)("Something went wrong...");case 16:(0,p.removeLoading)();case 17:case"end":return e.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}();i.refs.booksHandler.addEventListener("click",_);var k=document.querySelector("input[name=theme_switch]");window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),k.checked=!0):(document.documentElement.setAttribute("data-theme","light"),k.checked=!1),k.addEventListener("change",(function(e){document.documentElement.setAttribute("data-theme",e.target.checked?"dark":"light")})),window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),k.checked=!0):(document.documentElement.setAttribute("data-theme","light"),k.checked=!1),k.addEventListener("change",(function(e){var t=e.target.checked?"dark":"light";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}));var w=localStorage.getItem("theme");w&&(document.documentElement.setAttribute("data-theme",w),k.checked="dark"===w)}();
//# sourceMappingURL=index.b93062ca.js.map