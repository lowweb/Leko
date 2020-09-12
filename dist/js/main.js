/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/btn/btn.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/btn/btn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("btn-scroll").onclick = function () {
  document.getElementById('calc').scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

/***/ }),

/***/ "./src/blocks/modules/calculator/calculator.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/calculator/calculator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/contract-menu/contract-menu.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/contract-menu/contract-menu.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var itemMenuContr = document.querySelectorAll(".contract-menu__cap a");
console.log(itemMenuContr);

for (var i = 0; i < itemMenuContr.length; i++) {
  itemMenuContr[i].addEventListener('click', function (event) {
    event.preventDefault();
    clickMenuContr(this);
  });
}

function clickMenuContr(el) {
  var items = document.querySelectorAll(".contract-menu__item");

  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("contract-menu__item--active");
  }

  el.parentElement.parentElement.classList.add("contract-menu__item--active");
}

;

/***/ }),

/***/ "./src/blocks/modules/ham/ham.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/ham/ham.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("menu-btn").onclick = function () {
  document.getElementById("menu-btn").classList.toggle('ham--active');
  document.getElementsByClassName('menu__nav')[0].classList.toggle('menu__nav--opn');
};

/***/ }),

/***/ "./src/blocks/modules/tabmenu/tabmenu.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/tabmenu/tabmenu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabitem = document.querySelectorAll(".tabmenu__item");

for (var i = 0; i < tabitem.length; i++) {
  tabitem[i].addEventListener('click', function (event) {
    clickTab(this);
  });
}

function clickTab(el) {
  var items = document.querySelectorAll(".tabmenu__item");

  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("tabmenu__item--active");
  }

  el.classList.add("tabmenu__item--active");
}

;

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabmenu_tabmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/tabmenu/tabmenu */ "./src/blocks/modules/tabmenu/tabmenu.js");
/* harmony import */ var _modules_tabmenu_tabmenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_tabmenu_tabmenu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_contract_menu_contract_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/contract-menu/contract-menu */ "./src/blocks/modules/contract-menu/contract-menu.js");
/* harmony import */ var _modules_contract_menu_contract_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_contract_menu_contract_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/btn/btn */ "./src/blocks/modules/btn/btn.js");
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_btn_btn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_calculator_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/calculator/calculator */ "./src/blocks/modules/calculator/calculator.js");
/* harmony import */ var _modules_calculator_calculator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_calculator_calculator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_ham_ham__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/ham/ham */ "./src/blocks/modules/ham/ham.js");
/* harmony import */ var _modules_ham_ham__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_ham_ham__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ "./src/js/import/modules.js");
/* harmony import */ var _svguse_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svguse.min.js */ "./src/js/svguse.min.js");
/* harmony import */ var _svguse_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svguse_min_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/svguse.min.js":
/*!******************************!*\
  !*** ./src/js/svguse.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map