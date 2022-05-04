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

    this.parent = parent; // keyboard
    this.pressing = new PressingPhysicalButton('active'); // put active class when you press button
    this.shift = false;
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

      this.keystrokesAnimate(btn);
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

  keystrokesAnimate(btn) {
    btn.addEventListener('mousedown', () => {
      btn.classList.add(this.activeClassName);
    });

    btn.addEventListener('mouseup', () => {
      btn.classList.remove(this.activeClassName);
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove(this.activeClassName);
    });
  }

  static setUpperCase(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      const button = elem;
      if (localStorage.getItem('language') === 'EN') {
        button.innerText = keyInformation[i].keyEN_SHIFT;
      } else {
        button.innerText = keyInformation[i].keyRU_SHIFT;
      }
    });
  }

  static setLowerCase(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      const button = elem;
      if (localStorage.getItem('language') === 'EN') {
        button.innerText = keyInformation[i].key;
      } else {
        button.innerText = keyInformation[i].keyRU;
      }
    });
  }

  pressToShift() {
    let allowed = true;
    document.addEventListener('keydown', (event) => {
      if (event.repeat !== undefined) {
        allowed = !event.repeat;
      }

      if (!allowed) return;

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
      this.pressed = [];
    });
  }
}
