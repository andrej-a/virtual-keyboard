/* eslint-disable max-len */
import CreateElement from './createElement';
import keyInformation from './keycode';
import PressingPhysicalButton from './pressing';

export default class CreateButtons {
  constructor(buttonClassName, systemButtonClassName, activeClassName, parent) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
    this.activeClassName = activeClassName;
    this.parent = parent;
    this.pressing = new PressingPhysicalButton('active');
  }

  init() {
    this.addKeyToKeyboard(keyInformation);
    this.switchLanguage();
    this.pressing.keyDown(this.parent.children);
  }

  addKeyToKeyboard(array) {
    array.forEach((item) => {
      const {
        key, keyEN_SHIFT, keyRU, keyRU_SHIFT, code,
      } = item; // get props from BD

      this.button = new CreateElement('button').init();

      if (item.system) {
        this.button.classList.add(this.systemButtonClassName);
        this.button.classList.add(code);
      } else {
        this.button.classList.add(this.buttonClassName);
      }

      this.button.code = code; // put the btn code to button

      if (!localStorage.getItem('language')) { // check language in localStorage
        localStorage.setItem('language', 'EN'); // if is not set English like default language
        this.button.innerText = key;
      } else {
        this.button.innerText = localStorage.getItem('language') === 'EN' ? key : keyRU; // if it is choose between EN and RU
      }

      this.keystrokesAnimate(this.button);

      this.parent.append(this.button);
    });
  }

  keystrokesAnimate(btn) {
    btn.addEventListener('mousedown', () => {
      btn.classList.add(this.activeClassName);
    });

    btn.addEventListener('mouseup', () => {
      btn.classList.remove(this.activeClassName);
    });
  }

  switchLanguage() {
    this.pressed = []; // array for pressing keys
    this.hotKeys = ['ControlRight', 'Enter']; // hot keys for switching language

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (this.pressed.indexOf(event.code) === -1) { // if you don`t press key yet
        this.pressed.push(event.code); // put it to array
      }
    });

    document.addEventListener('keyup', (e) => {
      // if each of keys from hot keys was pressing, and there are not any other keys
      if (this.hotKeys.every((btn) => this.pressed.indexOf(btn) !== -1) && this.pressed.length === this.hotKeys.length) {
        // change language in localStorage to opposite
        localStorage.setItem('language', `${localStorage.getItem('language') === 'EN' ? 'RU' : 'EN'}`);

        while (this.parent.firstChild) { // remove all buttons from keyboard
          this.parent.removeChild(this.parent.firstChild);
        }

        this.init(); // and init them again
      }
      this.pressed = [];
    });
  }
}
