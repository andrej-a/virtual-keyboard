import CreateElement from './createElement';

export default class CreateButtons {
  constructor(buttonClassName, systemButtonClassName) {
    this.button = null;
    this.buttonClassName = buttonClassName;
    this.systemButtonClassName = systemButtonClassName;
  }

  init(item) {
    this.button = new CreateElement('button').init();
    if (item.system) {
      this.button.classList.add(this.systemButtonClassName);
    } else {
      this.button.classList.add(this.buttonClassName);
    }
    this.button.innerText = item.key;
    return this.button;
  }
}
