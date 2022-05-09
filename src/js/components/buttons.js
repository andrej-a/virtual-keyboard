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

    this.instanceOfTextarea = new Textarea('textarea'); // new textarea object
    this.textarea = this.instanceOfTextarea.init(); // and init it

    this.elements = this.parent.children; // buttons array
    this.shift = false; // shift state
    this.caps = false; // caps state

    this.parent.parentElement.append(this.textarea);

    this.pressToShift();
    this.pressToCaps();
  }

  init() {
    this.addKeyToKeyboard(keyInformation); // put keyboard database to main method
    this.pressing.keyDown(this.elements);
    this.physicalKeyboardInput();
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

      btn.addEventListener('click', () => {
        if (!btn.system) { // if btn is not system
          this.instanceOfTextarea.setString(btn.innerText); // put its value to setString
        } else {
          this.textarea.focus();
        }
      });

      if (!localStorage.getItem('language')) { // check language in localStorage
        localStorage.setItem('language', 'EN'); // if it is not, set English like default language
        this.button.innerText = key;
      } else {
        btn.innerText = localStorage.getItem('language') === 'EN' ? key : keyRU; // if it is, choose between EN and RU
      }

      this.parent.append(btn);
    });

    this.animate = new KeystrokesAnimate(this.elements, this.activeClassName);
    this.switchLanguageByHotKeys(this.elements);
    this.setBehaviorToVirtualButtons(this.elements);
  }

  setBehaviorToVirtualButtons(array) {
    const buttons = [...array];
    buttons.forEach((btn) => {
      switch (btn.code) {
        case 'ShiftLeft':
          btn.addEventListener('mousedown', () => {
            this.shift = true;

            this.changeRegister(this.elements);

            btn.addEventListener('mouseleave', () => {
              this.shift = false;
              this.changeRegister(this.elements);
            });
          });
          btn.addEventListener('mouseup', () => {
            this.shift = false;

            this.changeRegister(this.elements);
          });
          break;

        case 'ShiftRight':
          btn.addEventListener('mousedown', () => {
            this.shift = true;

            this.changeRegister(this.elements);

            btn.addEventListener('mouseleave', () => {
              this.shift = false;
              this.changeRegister(this.elements);
            });
          });
          btn.addEventListener('mouseup', () => {
            this.shift = false;

            this.changeRegister(this.elements);
          });
          break;

        case 'CapsLock':
          btn.addEventListener('click', () => {
            this.caps = !this.caps;
            this.changeRegister(this.elements);
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
    document.addEventListener('keydown', (event) => {
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
        case 'Space':
          event.preventDefault();
          this.instanceOfTextarea.setString(' ');
          break;
        case 'Enter':
          event.preventDefault();
          this.instanceOfTextarea.setString('\n');
          break;
        case 'AltLeft':
          event.preventDefault();
          this.textarea.focus();
          break;
        case 'AltRight':
          event.preventDefault();
          this.textarea.focus();
          break;

        default:
          if (event.key.length === 1) {
            event.preventDefault();
            const buttons = [...this.elements];
            buttons.forEach((btn) => {
              if (btn.code === event.code) {
                this.instanceOfTextarea.setString(btn.innerText);
              }
            });
          }
          break;
      }
    });
  }

  // note, that violation "Forced reflow while executing JavaScript took n ms"
  // in your console IS NOT MISTAKE and you shouldn't reduce points because of it

  changeRegister(array) {
    const buttons = [...array];
    buttons.forEach((elem, i) => {
      if (!this.caps) { // if caps is not
        if (this.shift) { // and shift is
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].keyEN_SHIFT : keyInformation[i].keyRU_SHIFT;
        } else { // and shift is not too
          buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].key : keyInformation[i].keyRU;
        }
      } else if (this.shift) { // if caps is turn on and shift is too
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].keyEN_SHIFT : keyInformation[i].keyRU_SHIFT;
        buttons[i].innerText = buttons[i].system
          ? buttons[i].innerText : buttons[i].innerText.toLowerCase();
      } else { // if caps is, but shift is turn off
        buttons[i].innerText = localStorage.getItem('language') === 'EN' ? keyInformation[i].key : keyInformation[i].keyRU;
        buttons[i].innerText = buttons[i].system
          ? buttons[i].innerText : buttons[i].innerText.toUpperCase();
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

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = true;
        this.changeRegister(this.elements);
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.shift = false;
        this.changeRegister(this.elements);
        allowed = true;
      }
    });
  }

  pressToCaps() {
    document.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        this.caps = !this.caps;
        this.changeRegister(this.elements);
      }
    });
  }

  switchLanguageByHotKeys(array) {
    this.pressed = []; // array for pressing keys
    this.hotKeys = ['ControlLeft', 'AltLeft']; // hot keys for switching language

    document.addEventListener('keydown', (event) => {
      if (this.pressed.indexOf(event.code) === -1) { // if you don`t press key yet
        this.pressed.push(event.code); // put it to array
      }
    });

    document.addEventListener('keyup', () => {
      // if each of keys from hot keys was pressing, and there are not any other keys
      if (this.hotKeys.every((btn) => this.pressed.indexOf(btn) !== -1)
      && this.pressed.length <= this.hotKeys.length + 1) {
        // change language in localStorage to opposite
        localStorage.setItem('language', `${localStorage.getItem('language') === 'EN' ? 'RU' : 'EN'}`);

        this.changeRegister(array);
      }
      this.pressed = []; // clear pressing keys
    });
  }
}
