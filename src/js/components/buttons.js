import CreateElement from './createElement';
import keyInformation from './keycode';
import PressingPhysicalButton from './pressing';
import KeystrokesAnimate from './animateKeyStrokes';
import Textarea from './textarea';

export default class CreateButtons {
  constructor(
    buttonClassName,
    systemButtonClassName,
    activeClassName,
    parent,
  ) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
    this.activeClassName = activeClassName;
    this.parent = parent; // keyboard
    this.pressing = new PressingPhysicalButton('active'); // put active class when you press button

    this.instanceOfTextarea = new Textarea('textarea');
    this.textarea = this.instanceOfTextarea.init();

    this.elements = this.parent.children;
    this.shift = false;
    this.caps = false;

    this.parent.parentElement.append(this.textarea);

    this.pressToShift();
    this.pressToCaps();
  }

  init() {
    this.addKeyToKeyboard(keyInformation);
    this.pressing.keyDown(this.parent.children);
  }

  addKeyToKeyboard(array) {
    array.forEach((item) => {
      const {
        key, keyRU, code,
      } = item; // get props from BD

      const btn = new CreateElement('button').init();

      if (item.system) {
        btn.classList.add(this.systemButtonClassName);
        btn.classList.add(code);
        btn.system = true;
      } else {
        btn.classList.add(this.buttonClassName);
      }

      btn.code = code; // put the btn code to button

      btn.onclick = () => {
        if (!btn.system) {
          this.instanceOfTextarea.setString(btn.innerText);
        }
      };

      if (!localStorage.getItem('language')) { // check language in localStorage
        localStorage.setItem('language', 'EN'); // if is not, set English like default language
        this.button.innerText = key;
      } else {
        btn.innerText = localStorage.getItem('language') === 'EN' ? key : keyRU; // if it is, choose between EN and RU
      }

      this.parent.append(btn);
    });

    this.animate = new KeystrokesAnimate(this.elements, this.activeClassName);
    this.switchLanguageByHotKeys(this.elements);
    this.buttons(this.elements);
  }

  buttons(array) {
    const buttons = [...array];
    buttons.forEach((btn) => {
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

        case 'CapsLock':
          btn.addEventListener('click', () => {
            this.caps = !this.caps;
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

        default:
          break;
      }
    });
  }

  /* inputByPhysicalKeys() {
    document.addEventListener("keydown", (e) => {
      console.log(e);
      this.instanceOfTextarea.setString(`${e.key.length > 1 ? '' : e.key}`);
    });
  } */

  changeRegisterByShift(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      if (!this.caps) {
        if (this.shift) {
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].keyEN_SHIFT : keyInformation[i].keyRU_SHIFT;
        } else {
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].key : keyInformation[i].keyRU;
        }
      } else if (this.shift) {
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].keyEN_SHIFT : keyInformation[i].keyRU_SHIFT;
        buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
      } else {
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].key : keyInformation[i].keyRU;
        buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
      }
    });
  }

  changeRegisterByCaps(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      if (!this.shift) {
        if (this.caps) {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
        } else {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
        }
      } else if (this.shift) {
        if (this.caps) {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
        } else {
          buttons[i].innerText = buttons[i].system ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
        }
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
        this.changeRegisterByShift(this.elements);
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') {
        this.shift = false;
        this.changeRegisterByShift(this.elements);
        allowed = true;
      }
    });
  }

  pressToCaps() {
    document.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        this.caps = !this.caps;
        this.changeRegisterByCaps(this.elements);
      }
    });
  }

  switchLanguageByHotKeys(array) {
    this.pressed = []; // array for pressing keys
    this.hotKeys = ['ControlRight', 'Enter']; // hot keys for switching language

    document.addEventListener('keydown', (event) => {
      if (this.pressed.indexOf(event.code) === -1) { // if you don`t press key yet
        this.pressed.push(event.code); // put it to array
      }
    });

    document.addEventListener('keyup', () => {
      // if each of keys from hot keys was pressing, and there are not any other keys
      if (this.hotKeys.every((btn) => this.pressed.indexOf(btn) !== -1) && this.pressed.length <= this.hotKeys.length + 1) {
        // change language in localStorage to opposite
        localStorage.setItem('language', `${localStorage.getItem('language') === 'EN' ? 'RU' : 'EN'}`);

        this.changeRegisterByShift(array);
      }
      this.pressed = []; // clear pressing keys
    });
  }
}
