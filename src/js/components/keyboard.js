import CreateElement from './createElement';
import CreateButtons from './buttons';
import keyInformation from './keycode';

export default class Keyboard {
  constructor(keyboardWrapperClassName, keyboardClassName) {
    this.keyboardWrapper = null;
    this.keyboard = null;
    this.keyboardWrapperClassName = keyboardWrapperClassName;
    this.keyboardClassName = keyboardClassName;
  }

  init() {
    this.keyboardWrapper = new CreateElement('div').init();
    this.keyboard = new CreateElement('div').init();

    this.keyboardWrapper.classList.add(this.keyboardWrapperClassName);
    this.keyboard.classList.add(this.keyboardClassName);

    this.keyboardWrapper.append(this.keyboard);

    keyInformation.forEach((item) => {
      const btn = new CreateButtons('button', 'systemButton').init(item);
      this.keyboard.append(btn);
    });

    return this.keyboardWrapper;
  }
}
