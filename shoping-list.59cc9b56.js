!function(){function n(n,e,r,o){Object.defineProperty(n,e,{get:r,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},a=r.parcelRequired7c6;null==a&&((a=function(n){if(n in o)return o[n].exports;if(n in t){var e=t[n];delete t[n];var r={id:n,exports:{}};return o[n]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){t[n]=e},r.parcelRequired7c6=a),a.register("iE7OH",(function(e,r){var o,t;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return t}),(function(n){return t=n}));var a={};o=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)a[e[r]]=n[e[r]]},t=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,r){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var t={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=t[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),t[n]=e),e}})),a("iE7OH").register(JSON.parse('{"eMUNn":"shoping-list.59cc9b56.js","6Hg8L":"sample.eaf37d8e.png","aaLHb":"amazon.8e8667c1.png","5yJ2I":"book1.8d01f172.png","kAnhc":"book2.b226e49c.png","410VS":"icons.78137695.svg","ge42F":"index.c32e7a39.js"}')),a("9EY00");var i,s=a("bpxeT"),c=a("2TvXO"),l=a("laqZe"),u=a("9EY00");i=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("6Hg8L");var f;f=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("aaLHb");var d;d=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("5yJ2I");var p;p=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("kAnhc");var g;g=a("aNJCr").getBundleURL("eMUNn")+a("iE7OH").resolve("410VS");var v,b=function(n){var e=new URL(i),r=new URL(f),o=new URL(d),t=new URL(p),a=new URL(g);return n.map((function(n){var i=n._id,s=n.book_image,c=n.title,l=n.author,u=n.list_name,f=n.amazon_product_url,d=n.description;return'<li class="shoping-list_book" data-book="'.concat(i,'">\n          <img class="book_img" src="').concat(s||e,'" alt="').concat(c,'" loading="lazy">\n          <div class="book-information">\n            <div class="flex-inheritance">\n              <h2 class="book_title">').concat(c,'</h2>\n              <p class="book_category">').concat(u,'</p>\n              <p class="book_descriprion">').concat(d,'</p>\n            </div>\n            <div class="book_links-and-author">\n              <p class="book_author">').concat(l,'</p>\n              <ul class="book_shoping-links">\n                <li><a class="shoping-links_link" href="').concat(f,'"><img class="amazon-img" src="').concat(r,'" alt=""></a></li>\n                <li><a class="shoping-links_link" href="').concat(f,'"><img class="book1_img" src="').concat(o,'" alt=""></a></li>\n                <li><a class="shoping-links_link" href="').concat(f,'"><img class="book2_img" src="').concat(t,'" alt=""></a></li>\n              </ul>\n            </div>\n          </div>\n          <button class="delete-btn" type="button">\n            <svg class="shoping-trash__svg">\n             <use href="').concat(a,'#icon-bin"></use\n            </svg>\n          </button>\n        </li>')})).join("")},h=a("bi3nC"),_=a("3sQwF"),k=(v=e(s)(e(c).mark((function n(){var r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,h.startLoading)(),n.prev=1,n.next=4,(0,l.getBooksOfCertainCategory)("Combined Print and E-Book Fiction");case 4:r=n.sent,u.refs.shopList.innerHTML=b(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),u.refs.shopList.innerHTML=(0,_.renderError)();case 11:(0,h.removeLoading)();case 12:case"end":return n.stop()}}),n,null,[[1,8]])}))),function(){return v.apply(this,arguments)});window.addEventListener("load",k)}();
//# sourceMappingURL=shoping-list.59cc9b56.js.map
