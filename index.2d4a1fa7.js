!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"EVgbq":"index.2d4a1fa7.js","6Hg8L":"sample.eaf37d8e.png","ge42F":"index.80d30e11.js"}')),s("9EY00"),(c=s("9EY00")).refs.burger.addEventListener("click",(function(){c.refs.mobileMenu.classList.contains("showMenu")?(c.refs.mobileMenu.classList.remove("showMenu"),c.refs.burgerCloseIcon.classList.add("hideButton"),c.refs.burgerCloseIcon.classList.remove("showButton"),c.refs.burgerMenuIcon.classList.add("showButton"),c.refs.burgerMenuIcon.classList.remove("hideButton"),document.body.classList.remove("lock")):(c.refs.mobileMenu.classList.add("showMenu"),c.refs.burgerCloseIcon.classList.add("showButton"),c.refs.burgerCloseIcon.classList.remove("hideButton"),c.refs.burgerMenuIcon.classList.add("hideButton"),c.refs.burgerMenuIcon.classList.remove("showButton"),document.body.classList.add("lock"))})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(c.refs.mobileMenu.classList.remove("showMenu"),c.refs.burgerCloseIcon.classList.add("hideButton"),c.refs.burgerCloseIcon.classList.remove("showButton"),c.refs.burgerMenuIcon.classList.add("showButton"),c.refs.burgerMenuIcon.classList.remove("hideButton"),document.body.classList.remove("lock"))}));var o=s("bpxeT"),a=s("2TvXO"),i=s("laqZe"),c=s("9EY00"),l=function(e){return e.map((function(e){var n=e.list_name;return'<li class="categories__item">'.concat(n,"</li>")})).join("")};function u(){return(u=e(o)(e(a).mark((function n(){var t;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.getCategoryList)();case 3:t=e.sent,c.refs.allCategoriesList.insertAdjacentHTML("beforeend",l(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}window.addEventListener("load",(function(){return u.apply(this,arguments)}));var d;o=s("bpxeT"),a=s("2TvXO"),i=s("laqZe"),c=s("9EY00");d=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("6Hg8L");var g,p=function(e){var n=new URL(d);return e.map((function(e){var t=e._id,r=e.book_image,s=e.title,o=e.author;return'<li class="card" data-book="'.concat(t,'">\n        <div class="card__thumb">\n            <img src="').concat(r||n,'" loading="lazy" alt="').concat(s,'" class="card__img">\n            <div class="card__text">\n                <p class="card__text-inner">quick view</p>\n            </div>\n        </div>\n        <h3 class="card__title">').concat(s,'</h3>\n        <h4 class="card__author">').concat(o,"</h4>\n    </li>")})).join("")},f=(c=s("9EY00"),function(e){var n=e.split(" "),t=n[n.length-1],r=n.slice(0,-1).join(" ");c.refs.categoryTitle.innerHTML="".concat(r,' <span class="books__title-last">').concat(t,"</span>")}),h=s("bi3nC"),m=s("3sQwF"),v=(g=e(o)(e(a).mark((function n(){var t;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.startLoading)(),f("Best sellers books"),e.prev=2,e.next=5,(0,i.getTopBooks)();case 5:t=e.sent,c.refs.booksHandler.innerHTML=t.map((function(e){var n=e.list_name,t=e.books;return'<div class="category" data-category="'.concat(n,'">\n        <h2 class="category__title">').concat(n,'</h2>\n        <ul class="category__list">\n            ').concat(p(t),'\n        </ul>\n        <button class="btn--violet category__btn" data-category="').concat(n,'">see more</button>\n        </div>')})).join(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),c.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...");case 12:(0,h.removeLoading)();case 13:case"end":return e.stop()}}),n,null,[[2,9]])}))),function(){return g.apply(this,arguments)});c.refs.booksHandler&&window.addEventListener("load",v);c=s("9EY00");var w=function(){window.scroll({top:0,behavior:"smooth"})};new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?c.refs.scrollTopBtn.classList.add("hidden"):c.refs.scrollTopBtn.classList.remove("hidden")}))})).observe(c.refs.scrollTopTarget),c.refs.scrollTopBtn.addEventListener("click",w);var b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/"},{title:"UNITED24",url:"https://u24.gov.ua/uk"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine"},{title:"RAZOM",url:"https://www.razomforukraine.org/"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en"}],L=["../../images/saveTheChildren.png","./images/projectHope.png","./images/united24.png","./images/medicalCorps.png","./images/msf.png","./images/razom.png","./images/actionAgainst.png","./images/worldVision.png","./images/prytula.png"];b.forEach((function(e,n){e.img=new URL(L[n],"file:///src/js/components/support-funds.js")}));var _=document.getElementById("support-list");b.forEach((function(e){var n=document.createElement("li"),t=document.createElement("a"),r=document.createElement("img");t.href=e.url,t.target="_blank",t.rel="noopener noreferrer",r.src=e.img,t.appendChild(r),n.appendChild(t),_.appendChild(n)})),console.log(_);o=s("bpxeT"),a=s("2TvXO"),c=s("9EY00"),i=s("laqZe"),h=s("bi3nC"),m=s("3sQwF");var k=function(){var n=e(o)(e(a).mark((function n(t){var r,s;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===t.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return(0,h.startLoading)(),r=t.target.dataset.category,e.prev=4,e.next=7,(0,i.getBooksOfCertainCategory)(r);case 7:s=e.sent,f(r),c.refs.booksHandler.innerHTML='<ul class="books__list">'.concat(p(s),"</ul>"),w(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),c.refs.booksHandler.innerHTML=(0,m.renderError)("Something went wrong...");case 16:(0,h.removeLoading)();case 17:case"end":return e.stop()}}),n,null,[[4,13]])})));return function(e){return n.apply(this,arguments)}}();c.refs.booksHandler.addEventListener("click",k)}();
//# sourceMappingURL=index.2d4a1fa7.js.map
