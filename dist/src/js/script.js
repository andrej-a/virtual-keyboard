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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/animateKeyStrokes.js":
/*!************************************************!*\
  !*** ./src/js/components/animateKeyStrokes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeystrokesAnimate; });
class KeystrokesAnimate {
  constructor(array, activeClassName) {
    const buttons = [...array];
    buttons.forEach(btn => {
      btn.addEventListener('mousedown', () => {
        if (btn.code === 'CapsLock') {
          btn.classList.toggle(activeClassName);
        } else {
          btn.classList.add(activeClassName);
        }
      });
      btn.addEventListener('mouseup', () => {
        if (btn.code !== 'CapsLock') {
          btn.classList.remove(activeClassName);
        }
      });
      btn.addEventListener('mouseleave', () => {
        if (btn.code !== 'CapsLock') {
          btn.classList.remove(activeClassName);
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/js/components/buttons.js":
/*!**************************************!*\
  !*** ./src/js/components/buttons.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateButtons; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/components/createElement.js");
/* harmony import */ var _keycode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode */ "./src/js/components/keycode.js");
/* harmony import */ var _pressing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pressing */ "./src/js/components/pressing.js");
/* harmony import */ var _animateKeyStrokes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animateKeyStrokes */ "./src/js/components/animateKeyStrokes.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea */ "./src/js/components/textarea.js");





class CreateButtons {
  constructor(buttonClassName, systemButtonClassName, activeClassName, parent) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
    this.activeClassName = activeClassName;
    this.parent = parent; // keyboard

    this.pressing = new _pressing__WEBPACK_IMPORTED_MODULE_2__["default"]('active'); // put active class when you press button

    this.instanceOfTextarea = new _textarea__WEBPACK_IMPORTED_MODULE_4__["default"]('textarea');
    this.textarea = this.instanceOfTextarea.init();
    this.elements = this.parent.children;
    this.shift = false;
    this.caps = false;
    this.parent.parentElement.append(this.textarea);
    this.pressToShift();
    this.pressToCaps();
  }

  init() {
    this.addKeyToKeyboard(_keycode__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.pressing.keyDown(this.elements);
    this.physicalKeyboardInput();
  }

  addKeyToKeyboard(array) {
    array.forEach(item => {
      const {
        key,
        keyRU,
        code
      } = item; // get props from BD

      const btn = new _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button').init();

      if (item.system) {
        btn.classList.add(this.systemButtonClassName);
        btn.classList.add(code);
        btn.system = true;
      } else {
        btn.classList.add(this.buttonClassName);
      }

      btn.code = code; // put the btn code to button

      btn.addEventListener('click', () => {
        if (!btn.system) {
          this.instanceOfTextarea.setString(btn.innerText);
        } else {
          this.textarea.focus();
        }
      });

      if (!localStorage.getItem('language')) {
        // check language in localStorage
        localStorage.setItem('language', 'EN'); // if is not, set English like default language

        this.button.innerText = key;
      } else {
        btn.innerText = localStorage.getItem('language') === 'EN' ? key : keyRU; // if it is, choose between EN and RU
      }

      this.parent.append(btn);
    });
    this.animate = new _animateKeyStrokes__WEBPACK_IMPORTED_MODULE_3__["default"](this.elements, this.activeClassName);
    this.switchLanguageByHotKeys(this.elements);
    this.setBehaviorToVirtualButtons(this.elements);
  }

  setBehaviorToVirtualButtons(array) {
    const buttons = [...array];
    buttons.forEach(btn => {
      switch (btn.code) {
        case 'ShiftLeft':
          btn.addEventListener('mousedown', () => {
            this.shift = true;
            this.changeRegisterByShift(this.elements);
          });
          btn.addEventListener('mouseup', () => {
            this.shift = false;
            this.changeRegisterByShift(this.elements);
          });
          btn.addEventListener('mouseleave', () => {
            this.shift = false;
            this.changeRegisterByShift(this.elements);
          });
          break;

        case 'ShiftRight':
          btn.addEventListener('mousedown', () => {
            this.shift = true;
            this.changeRegisterByShift(this.elements);
          });
          btn.addEventListener('mouseup', () => {
            this.shift = false;
            this.changeRegisterByShift(this.elements);
          });
          btn.addEventListener('mouseleave', () => {
            this.shift = false;
            this.changeRegisterByShift(this.elements);
          });
          break;

        case 'CapsLock':
          btn.addEventListener('click', () => {
            this.caps = !this.caps;
            this.instanceOfTextarea.setUpperCase(this.caps);
            this.changeRegisterByCaps(this.elements);
          });
          break;

        case 'Enter':
          btn.addEventListener('click', () => {
            this.instanceOfTextarea.setString('\n');
          });
          break;

        case 'Space':
          btn.addEventListener('click', () => {
            this.instanceOfTextarea.setString(' ');
          });
          break;

        case 'Tab':
          btn.addEventListener('click', () => {
            this.instanceOfTextarea.setString('    ');
          });
          break;

        case 'Backspace':
          btn.addEventListener('click', () => {
            this.instanceOfTextarea.deleteLetter(1, 0);
          });
          break;

        case 'Delete':
          btn.addEventListener('click', () => {
            this.instanceOfTextarea.deleteLetter(0, 1);
          });
          break;

        default:
          break;
      }
    });
  }

  physicalKeyboardInput() {
    document.addEventListener('keydown', event => {
      this.textarea.focus();

      switch (event.code) {
        case 'Backspace':
          this.instanceOfTextarea.updatePositionByKeyboard(-1);
          break;

        case 'Delete':
          this.instanceOfTextarea.updatePositionByKeyboard(0);
          break;

        case 'ArrowLeft':
          event.preventDefault();
          this.instanceOfTextarea.setString('←');
          break;

        case 'ArrowUp':
          event.preventDefault();
          this.instanceOfTextarea.setString('↑');
          break;

        case 'ArrowDown':
          event.preventDefault();
          this.instanceOfTextarea.setString('↓');
          break;

        case 'ArrowRight':
          event.preventDefault();
          this.instanceOfTextarea.setString('→');
          break;

        case 'Tab':
          event.preventDefault();
          this.instanceOfTextarea.setString('    ');
          break;

        default:
          if (event.key.length === 1) {
            event.preventDefault();
            this.instanceOfTextarea.setString(event.key);
          }

          break;
      }
    });
  }

  changeRegisterByShift(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      if (!this.caps) {
        if (this.shift) {
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyEN_SHIFT : _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyRU_SHIFT;
        } else {
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].key : _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyRU;
        }
      } else if (this.shift) {
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyEN_SHIFT : _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyRU_SHIFT;
        buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
      } else {
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].key : _keycode__WEBPACK_IMPORTED_MODULE_1__["default"][i].keyRU;
        buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
      }
    });
  }

  changeRegisterByCaps(array) {
    const buttons = [...array];

    if (!this.shift) {
      if (this.caps) {
        buttons.forEach((elem, i) => {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
        });
      } else {
        buttons.forEach((elem, i) => {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
        });
      }
    } else if (this.shift) {
      if (this.caps) {
        buttons.forEach((elem, i) => {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
        });
      } else {
        buttons.forEach((elem, i) => {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
        });
      }
    }
  }

  pressToShift() {
    let allowed = true;
    document.addEventListener('keydown', event => {
      if (event.repeat !== undefined) {
        allowed = !event.repeat;
      }

      if (!allowed) return; // stop repeat keydown event

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = true;
        this.changeRegisterByShift(this.elements);
      }
    });
    document.addEventListener('keyup', event => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = false;
        this.changeRegisterByShift(this.elements);
        allowed = true;
      }
    });
  }

  pressToCaps() {
    document.addEventListener('keyup', event => {
      if (event.code === 'CapsLock') {
        this.caps = !this.caps;
        this.instanceOfTextarea.setUpperCase(this.caps);
        this.changeRegisterByCaps(this.elements);
      }
    });
  }

  switchLanguageByHotKeys(array) {
    this.pressed = []; // array for pressing keys

    this.hotKeys = ['ControlRight', 'Enter']; // hot keys for switching language

    document.addEventListener('keydown', event => {
      if (this.pressed.indexOf(event.code) === -1) {
        // if you don`t press key yet
        this.pressed.push(event.code); // put it to array
      }
    });
    document.addEventListener('keyup', () => {
      // if each of keys from hot keys was pressing, and there are not any other keys
      if (this.hotKeys.every(btn => this.pressed.indexOf(btn) !== -1) && this.pressed.length <= this.hotKeys.length + 1) {
        // change language in localStorage to opposite
        localStorage.setItem('language', `${localStorage.getItem('language') === 'EN' ? 'RU' : 'EN'}`);
        this.changeRegisterByShift(array);
      }

      this.pressed = []; // clear pressing keys
    });
  }

}

/***/ }),

/***/ "./src/js/components/createElement.js":
/*!********************************************!*\
  !*** ./src/js/components/createElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateElement; });
class CreateElement {
  constructor(tag) {
    this.element = null;
    this.tag = tag;
  }

  init() {
    this.element = document.createElement(this.tag);
    return this.element;
  }

}

/***/ }),

/***/ "./src/js/components/description.js":
/*!******************************************!*\
  !*** ./src/js/components/description.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Description; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/components/createElement.js");

class Description {
  constructor(className, text) {
    this.description = new _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('p').init();
    this.description.classList.add(className);
    this.description.innerText = text;
  }

  init() {
    return this.description;
  }

}

/***/ }),

/***/ "./src/js/components/init.js":
/*!***********************************!*\
  !*** ./src/js/components/init.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Initialisation; });
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ "./src/js/components/wrapper.js");

class Initialisation {
  constructor(tag) {
    this.parent = document.querySelector(tag);
    this.wrapper = new _wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]('wrapper').init();
  }

  init() {
    this.parent.append(this.wrapper);
  }

}

/***/ }),

/***/ "./src/js/components/keyboard.js":
/*!***************************************!*\
  !*** ./src/js/components/keyboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/components/createElement.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/js/components/buttons.js");


class Keyboard {
  constructor(keyboardWrapperClassName, keyboardClassName) {
    this.keyboardWrapper = null;
    this.keyboard = null;
    this.keyboardWrapperClassName = keyboardWrapperClassName;
    this.keyboardClassName = keyboardClassName;
  }

  init() {
    this.keyboardWrapper = new _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div').init();
    this.keyboard = new _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div').init();
    this.keyboardWrapper.classList.add(this.keyboardWrapperClassName);
    this.keyboard.classList.add(this.keyboardClassName);
    this.keyboardWrapper.append(this.keyboard);
    new _buttons__WEBPACK_IMPORTED_MODULE_1__["default"]('button', 'systemButton', 'active', this.keyboard).init();
    return this.keyboardWrapper;
  }

}

/***/ }),

/***/ "./src/js/components/keycode.js":
/*!**************************************!*\
  !*** ./src/js/components/keycode.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const keyInformation = [{
  key: '`',
  keyEN_SHIFT: '~',
  keyRU: 'ё',
  keyRU_SHIFT: 'Ё',
  code: 'Backquote'
}, {
  key: '1',
  keyEN_SHIFT: '!',
  keyRU: '1',
  keyRU_SHIFT: '"',
  code: 'Digit1'
}, {
  key: '2',
  keyEN_SHIFT: '@',
  keyRU: '2',
  keyRU_SHIFT: '"',
  code: 'Digit2'
}, {
  key: '3',
  keyEN_SHIFT: '#',
  keyRU: '3',
  keyRU_SHIFT: '№',
  code: 'Digit3'
}, {
  key: '4',
  keyEN_SHIFT: '$',
  keyRU: '4',
  keyRU_SHIFT: ';',
  code: 'Digit4'
}, {
  key: '5',
  keyEN_SHIFT: '%',
  keyRU: '5',
  keyRU_SHIFT: '%',
  code: 'Digit5'
}, {
  key: '6',
  keyEN_SHIFT: '^',
  keyRU: '6',
  keyRU_SHIFT: ':',
  code: 'Digit6'
}, {
  key: '7',
  keyEN_SHIFT: '&',
  keyRU: '7',
  keyRU_SHIFT: '?',
  code: 'Digit7'
}, {
  key: '8',
  keyEN_SHIFT: '*',
  keyRU: '8',
  keyRU_SHIFT: '*',
  code: 'Digit8'
}, {
  key: '9',
  keyEN_SHIFT: '(',
  keyRU: '9',
  keyRU_SHIFT: '(',
  code: 'Digit9'
}, {
  key: '0',
  keyEN_SHIFT: ')',
  keyRU: '0',
  keyRU_SHIFT: ')',
  code: 'Digit0'
}, {
  key: '-',
  keyEN_SHIFT: '_',
  keyRU: '-',
  keyRU_SHIFT: '_',
  code: 'Minus'
}, {
  key: '=',
  keyEN_SHIFT: '+',
  keyRU: '=',
  keyRU_SHIFT: '+',
  code: 'Equal'
}, {
  key: 'Backspace',
  keyEN_SHIFT: 'Backspace',
  keyRU: 'Backspace',
  keyRU_SHIFT: 'Backspace',
  code: 'Backspace',
  system: true
}, {
  key: 'Delete',
  keyEN_SHIFT: 'Delete',
  keyRU: 'Delete',
  keyRU_SHIFT: 'Delete',
  code: 'Delete',
  system: true
}, {
  key: 'Tab',
  keyEN_SHIFT: 'Tab',
  keyRU: 'Tab',
  keyRU_SHIFT: 'Tab',
  code: 'Tab',
  system: true
}, {
  key: 'q',
  keyEN_SHIFT: 'Q',
  keyRU: 'й',
  keyRU_SHIFT: 'Й',
  code: 'KeyQ'
}, {
  key: 'w',
  keyEN_SHIFT: 'W',
  keyRU: 'ц',
  keyRU_SHIFT: 'Ц',
  code: 'KeyW'
}, {
  key: 'e',
  keyEN_SHIFT: 'E',
  keyRU: 'у',
  keyRU_SHIFT: 'У',
  code: 'KeyE'
}, {
  key: 'r',
  keyEN_SHIFT: 'R',
  keyRU: 'к',
  keyRU_SHIFT: 'К',
  code: 'KeyR'
}, {
  key: 't',
  keyEN_SHIFT: 'T',
  keyRU: 'е',
  keyRU_SHIFT: 'Е',
  code: 'KeyT'
}, {
  key: 'y',
  keyEN_SHIFT: 'Y',
  keyRU: 'н',
  keyRU_SHIFT: 'Н',
  code: 'KeyY'
}, {
  key: 'u',
  keyEN_SHIFT: 'U',
  keyRU: 'г',
  keyRU_SHIFT: 'Г',
  code: 'KeyU'
}, {
  key: 'i',
  keyEN_SHIFT: 'I',
  keyRU: 'ш',
  keyRU_SHIFT: 'Ш',
  code: 'KeyI'
}, {
  key: 'o',
  keyEN_SHIFT: 'O',
  keyRU: 'щ',
  keyRU_SHIFT: 'Щ',
  code: 'KeyO'
}, {
  key: 'p',
  keyEN_SHIFT: 'P',
  keyRU: 'з',
  keyRU_SHIFT: 'З',
  code: 'KeyP'
}, {
  key: '[',
  keyEN_SHIFT: '{',
  keyRU: 'х',
  keyRU_SHIFT: 'Х',
  code: 'BracketLeft'
}, {
  key: ']',
  keyEN_SHIFT: '}',
  keyRU: 'ъ',
  keyRU_SHIFT: 'Ъ',
  code: 'BracketRight'
}, {
  key: '\\',
  keyEN_SHIFT: '|',
  keyRU: '\\',
  keyRU_SHIFT: '/',
  code: 'Backslash'
}, {
  key: 'CapsLock',
  keyEN_SHIFT: 'CapsLock',
  keyRU: 'CapsLock',
  keyRU_SHIFT: 'CapsLock',
  code: 'CapsLock',
  system: true
}, {
  key: 'a',
  keyEN_SHIFT: 'A',
  keyRU: 'ф',
  keyRU_SHIFT: 'Ф',
  code: 'KeyA'
}, {
  key: 's',
  keyEN_SHIFT: 'S',
  keyRU: 'ы',
  keyRU_SHIFT: 'Ы',
  code: 'KeyS'
}, {
  key: 'd',
  keyEN_SHIFT: 'D',
  keyRU: 'в',
  keyRU_SHIFT: 'В',
  code: 'KeyD'
}, {
  key: 'f',
  keyEN_SHIFT: 'F',
  keyRU: 'а',
  keyRU_SHIFT: 'А',
  code: 'KeyF'
}, {
  key: 'g',
  keyEN_SHIFT: 'G',
  keyRU: 'п',
  keyRU_SHIFT: 'П',
  code: 'KeyG'
}, {
  key: 'h',
  keyEN_SHIFT: 'H',
  keyRU: 'р',
  keyRU_SHIFT: 'Р',
  code: 'KeyH'
}, {
  key: 'j',
  keyEN_SHIFT: 'J',
  keyRU: 'о',
  keyRU_SHIFT: 'О',
  code: 'KeyJ'
}, {
  key: 'k',
  keyEN_SHIFT: 'K',
  keyRU: 'л',
  keyRU_SHIFT: 'Л',
  code: 'KeyK'
}, {
  key: 'l',
  keyEN_SHIFT: 'L',
  keyRU: 'д',
  keyRU_SHIFT: 'Д',
  code: 'KeyL'
}, {
  key: ';',
  keyEN_SHIFT: ':',
  keyRU: 'ж',
  keyRU_SHIFT: 'Ж',
  code: 'Semicolon'
}, {
  key: "'",
  keyEN_SHIFT: '"',
  keyRU: 'э',
  keyRU_SHIFT: 'Э',
  code: 'Quote'
}, {
  key: 'Enter',
  keyEN_SHIFT: 'Enter',
  keyRU: 'Enter',
  keyRU_SHIFT: 'Enter',
  code: 'Enter',
  system: true
}, {
  key: 'Shift',
  keyEN_SHIFT: 'Shift',
  keyRU: 'Shift',
  keyRU_SHIFT: 'Shift',
  code: 'ShiftLeft',
  system: true
}, {
  key: 'z',
  keyEN_SHIFT: 'Z',
  keyRU: 'я',
  keyRU_SHIFT: 'Я',
  code: 'KeyZ'
}, {
  key: 'x',
  keyEN_SHIFT: 'X',
  keyRU: 'ч',
  keyRU_SHIFT: 'Ч',
  code: 'KeyX'
}, {
  key: 'c',
  keyEN_SHIFT: 'C',
  keyRU: 'с',
  keyRU_SHIFT: 'С',
  code: 'KeyC'
}, {
  key: 'v',
  keyEN_SHIFT: 'V',
  keyRU: 'м',
  keyRU_SHIFT: 'М',
  code: 'KeyV'
}, {
  key: 'b',
  keyEN_SHIFT: 'B',
  keyRU: 'и',
  keyRU_SHIFT: 'И',
  code: 'KeyB'
}, {
  key: 'n',
  keyEN_SHIFT: 'N',
  keyRU: 'т',
  keyRU_SHIFT: 'Т',
  code: 'KeyN'
}, {
  key: 'm',
  keyEN_SHIFT: 'M',
  keyRU: 'ь',
  keyRU_SHIFT: 'Ь',
  code: 'KeyM'
}, {
  key: ',',
  keyEN_SHIFT: '<',
  keyRU: 'б',
  keyRU_SHIFT: 'Б',
  code: 'Comma'
}, {
  key: '.',
  keyEN_SHIFT: '>',
  keyRU: 'ю',
  keyRU_SHIFT: 'Ю',
  code: 'Period'
}, {
  key: '/',
  keyEN_SHIFT: '?',
  keyRU: '.',
  keyRU_SHIFT: ',',
  code: 'Slash'
}, {
  key: '↑',
  keyEN_SHIFT: '↑',
  keyRU: '↑',
  keyRU_SHIFT: '↑',
  code: 'ArrowUp'
}, {
  key: 'Shift',
  keyEN_SHIFT: 'Shift',
  keyRU: 'Shift',
  keyRU_SHIFT: 'Shift',
  code: 'ShiftRight',
  system: true
}, {
  key: 'Control',
  keyEN_SHIFT: 'Control',
  keyRU: 'Control',
  keyRU_SHIFT: 'Control',
  code: 'ControlLeft',
  system: true
}, {
  key: 'Win',
  keyEN_SHIFT: 'Win',
  keyRU: 'Win',
  keyRU_SHIFT: 'Win',
  code: 'MetaLeft',
  system: true
}, {
  key: 'Alt',
  keyEN_SHIFT: 'Alt',
  keyRU: 'Alt',
  keyRU_SHIFT: 'Alt',
  code: 'AltLeft',
  system: true
}, {
  key: ' ',
  keyEN_SHIFT: '',
  keyRU: '',
  keyRU_SHIFT: '',
  code: 'Space',
  system: true
}, {
  key: 'Control',
  keyEN_SHIFT: 'Control',
  keyRU: 'Control',
  keyRU_SHIFT: 'Control',
  code: 'ControlRight',
  system: true
}, {
  key: '←',
  keyEN_SHIFT: '←',
  keyRU: '←',
  keyRU_SHIFT: '←',
  code: 'ArrowLeft'
}, {
  key: '↓',
  keyEN_SHIFT: '↓',
  keyRU: '↓',
  keyRU_SHIFT: '↓',
  code: 'ArrowDown'
}, {
  key: '→',
  keyEN_SHIFT: '→',
  keyRU: '→',
  keyRU_SHIFT: '→',
  code: 'ArrowRight'
}];
/* harmony default export */ __webpack_exports__["default"] = (keyInformation);

/***/ }),

/***/ "./src/js/components/pressing.js":
/*!***************************************!*\
  !*** ./src/js/components/pressing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PressingPhysicalButton; });
class PressingPhysicalButton {
  constructor(active) {
    this.activeClass = active;
  }

  keyDown(array) {
    const arrayBtn = [...array];
    this.keyUp(arrayBtn);
    document.addEventListener('keydown', e => {
      arrayBtn.forEach(btn => {
        if (btn.code === 'CapsLock' && btn.code === e.code) {
          btn.classList.toggle(this.activeClass);
        } else if (btn.code === e.code) {
          btn.classList.add(this.activeClass);
        }
      });
    });
  }

  keyUp(array) {
    document.addEventListener('keyup', e => {
      array.forEach(btn => {
        if (btn.code !== 'CapsLock' && btn.code === e.code) {
          btn.classList.remove(this.activeClass);
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/js/components/textarea.js":
/*!***************************************!*\
  !*** ./src/js/components/textarea.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textarea; });
class Textarea {
  constructor(className) {
    this.textarea = null;
    this.className = className;
    this.position = 0;
    this.upperCaseText = false;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add(this.className);
    this.textarea.autofocus = true;
    this.updatePositionByClick();
    return this.textarea;
  }

  setUpperCase(value) {
    this.upperCaseText = value;
    console.log(this.upperCaseText);
  }

  updatePositionByClick() {
    this.textarea.addEventListener('click', () => {
      this.position = this.getPosition(this.textarea);
      console.log(this.position);
    });
  }

  updatePositionByKeyboard(n) {
    this.position += n;
    this.position = this.position < 0 ? 0 : this.position;
    console.log(this.position);
  }

  setString(value) {
    const start = this.textarea.value.slice(0, this.position);
    const finish = this.textarea.value.slice(this.position);
    this.textarea.value = `${start}${this.upperCaseText ? value.toUpperCase() : value.toLowerCase()}${finish}`;
    this.position += value.length;
    this.textarea.focus();
    this.textarea.setSelectionRange(this.position, this.position);
    console.log(this.position);
  }

  deleteLetter(rangeStart, rangeFinish) {
    if (rangeStart === 1 && this.position === 0) {
      this.textarea.focus();
      return;
    }

    const start = this.textarea.value.slice(0, this.position - rangeStart);
    const finish = this.textarea.value.slice(this.position + rangeFinish);
    this.textarea.value = `${start}${finish}`;
    this.position = start.length;
    this.textarea.setSelectionRange(this.position, this.position);
    this.textarea.focus();
    console.log(this.position);
  }

  getPosition(obj) {
    obj.focus();

    if (obj.selectionStart) {
      return obj.selectionStart;
    }

    if (document.selection) {
      const sel = document.selection.createRange();
      const clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(obj);
      clone.setEndPoint('EndToEnd', sel);
      this.position = clone.text.length;
      return this.position;
    }

    return 0;
  }

}

/***/ }),

/***/ "./src/js/components/wrapper.js":
/*!**************************************!*\
  !*** ./src/js/components/wrapper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/components/createElement.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/js/components/keyboard.js");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description */ "./src/js/components/description.js");



class Wrapper {
  constructor(className) {
    this.wrapper = null;
    this.className = className;
    this.instanceOfKeyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_1__["default"]('k_wrapper', 'k_wrapper__keyboard');
    this.keyboard = this.instanceOfKeyboard.init();
  }

  init() {
    this.wrapper = new _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div').init();
    this.wrapper.classList.add(this.className);
    this.wrapper.append(new _description__WEBPACK_IMPORTED_MODULE_2__["default"]('task_description', 'RSSchool virtual keyboard task').init());
    this.wrapper.append(this.keyboard);
    this.wrapper.append(new _description__WEBPACK_IMPORTED_MODULE_2__["default"]('task_description', 'For Windows').init());
    this.wrapper.append(new _description__WEBPACK_IMPORTED_MODULE_2__["default"]('instructions', 'Press Right Ctrl + Enter to change language').init());
    return this.wrapper;
  }

}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/init */ "./src/js/components/init.js");


(function init() {
  new _components_init__WEBPACK_IMPORTED_MODULE_0__["default"]('body').init();
})();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map