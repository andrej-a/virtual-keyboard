import CreateElement from './createElement';
import Keyboard from './keyboard';

export default class Wrapper {
  constructor(className) {
    this.wrapper = null;
    this.className = className;

    this.instanceOfKeyboard = new Keyboard('k_wrapper', 'k_wrapper__keyboard');
    this.keyboard = this.instanceOfKeyboard.init();
  }

  init() {
    this.wrapper = new CreateElement('div').init();
    this.wrapper.classList.add(this.className);

    this.wrapper.append(this.keyboard);
    return this.wrapper;
  }
}
