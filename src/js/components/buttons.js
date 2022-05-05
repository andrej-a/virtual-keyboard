/* eslint-disable max-len */
import CreateElement from './createElement';
import keyInformation from './keycode';
import PressingPhysicalButton from './pressing';
import KeystrokesAnimate from './animateKeyStrokes';

export default class CreateButtons {
  constructor(buttonClassName, systemButtonClassName, activeClassName, parent) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
    this.activeClassName = activeClassName;

    this.parent = parent; // keyboard
    this.pressing = new PressingPhysicalButton('active'); // put active class when you press button

    this.shift = false;
    this.caps = false;
  }

  init() {
    this.addKeyToKeyboard(keyInformation);
    this.switchLanguageByHotKeys();
    this.pressing.keyDown(this.parent.children);
    this.pressToShift();
  }

  addKeyToKeyboard(array) {
    array.forEach((item) => {
      const {
        key, keyENShift, keyRU, keyRUShift, code,
      } = item; // get props from BD

      const btn = new CreateElement('button').init();

      if (item.system) {
        btn.classList.add(this.systemButtonClassName);
        btn.classList.add(code);
      } else {
        btn.classList.add(this.buttonClassName);
      }

      btn.code = code; // put the btn code to button

      btn.onclick = () => {
        console.log(btn.innerText);
      };

      if (!localStorage.getItem('language')) { // check language in localStorage
        localStorage.setItem('language', 'EN'); // if is not, set English like default language
        this.button.innerText = key;
      } else {
        btn.innerText = localStorage.getItem('language') === 'EN' ? key : keyRU; // if it is, choose between EN and RU
      }

      this.animate = new KeystrokesAnimate(btn, this.activeClassName);
      this.buttons(btn);
      this.parent.append(btn);
    });
  }

  buttons(btn) {
    switch (btn.code) {
      case 'ShiftLeft':
        btn.addEventListener('mousedown', () => {
          this.shift = true;
          CreateButtons.setUpperCase(this.parent.children);
        });
        btn.addEventListener('mouseup', () => {
          this.shift = false;
          CreateButtons.setLowerCase(this.parent.children);
        });
        btn.addEventListener('mouseleave', () => {
          this.shift = false;
          CreateButtons.setLowerCase(this.parent.children);
        });
        break;

      default:
        break;
    }
  }

  static setUpperCase(array) {
    const buttons = [...array];

    buttons.forEach((elem, i) => {
      if (localStorage.getItem('language') === 'EN') {
        buttons[i].innerText = keyInformation[i].keyEN_SHIFT;
      } else {
        buttons[i].innerText = keyInformation[i].keyRU_SHIFT;
      }
    });
  }

  static setLowerCase(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      if (localStorage.getItem('language') === 'EN') {
        buttons[i].innerText = keyInformation[i].key;
      } else {
        buttons[i].innerText = keyInformation[i].keyRU;
      }
    });
  }

  pressToShift() {
    let allowed = true;

    document.addEventListener('keydown', (event) => {
      if (event.repeat !== undefined) {
        allowed = !event.repeat;
      }

      if (!allowed) return; // stop repeat keydown event

      if (event.code === 'ShiftLeft') {
        this.shift = true;
        CreateButtons.setUpperCase(this.parent.children);
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') {
        this.shift = false;
        allowed = true;
        CreateButtons.setLowerCase(this.parent.children);
      }
    });
  }

  switchLanguageByHotKeys() {
    this.pressed = []; // array for pressing keys
    this.hotKeys = ['ControlRight', 'Enter']; // hot keys for switching language

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (this.pressed.indexOf(event.code) === -1) { // if you don`t press key yet
        this.pressed.push(event.code); // put it to array
      }
    });

    document.addEventListener('keyup', () => {
      // if each of keys from hot keys was pressing, and there are not any other keys
      if (this.hotKeys.every((btn) => this.pressed.indexOf(btn) !== -1) && this.pressed.length === this.hotKeys.length) {
        // change language in localStorage to opposite
        localStorage.setItem('language', `${localStorage.getItem('language') === 'EN' ? 'RU' : 'EN'}`);

        while (this.parent.firstChild) { // remove all buttons from keyboard
          this.parent.removeChild(this.parent.firstChild);
        }

        this.init(); // and init them again
      }
      this.pressed = []; // clear pressing keys
    });
  }
}
