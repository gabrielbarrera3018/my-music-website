parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
!function(){"use strict";var t=document.querySelector(".navigation__hamburgerButton"),i=document.querySelector(".navigation__list-arrowButton"),n=document.querySelector("navigation__list"),e=document.querySelectorAll(".navigation__link");function a(){e.forEach(function(t){window.innerWidth<=767&&!t.classList.contains("linksFade")?t.classList.add("linksFade"):t.classList.remove("linksFade")})}t.addEventListener("click",function(){t.classList.toggle("js-active"),n.classList.toggle("navigation__list--open"),a(),n.classList.contains("navigation__list--open")?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1)}),i.addEventListener("click",function(){n.classList.toggle("navigation__list--open"),t.classList.contains("js-active")&&t.classList.remove("js-active"),n.classList.contains("navigation__list--open")?i.setAttribute("aria-expanded",!0):i.setAttribute("aria-expanded",!1),a(),i.innerText=">"===i.innerText?"<":">"}),e.forEach(function(i){i.addEventListener("click",function(){n.classList.remove("navigation__list--open"),t.classList.remove("js-active"),a()})}),window.addEventListener("scroll",function(){window.pageYOffset>200?i.classList.add("navigation__list-arrowButton--active"):i.classList.remove("navigation__list-arrowButton--active")})}();
},{}]},{},["L4bL"], null)
//# sourceMappingURL=script.3724b923.js.map