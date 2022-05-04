import CreateElement from './createElement';

export default class CreateButtons {
  constructor(buttonClassName, systemButtonClassName) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
  }

  init(item) {
    const {
      key, keyEN_SHIFT, keyRU, keyRU_SHIFT, code,
    } = item; // get props from BD

    this.button = new CreateElement('button').init();

    if (item.system) {
      this.button.classList.add(this.systemButtonClassName);
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

    return this.button;
  }
}
