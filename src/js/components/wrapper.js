import Textarea from './textarea';
import CreateElement from './createElement';
import Keyboard from './keyboard';

export default class Wrapper {
  constructor(className) {
    this.wrapper = null;
    this.className = className;

    this.textarea = new Textarea('textarea');
    this.textareaPanel = this.textarea.init();
    this.textarea.setString(this.textareaPanel, 'TETTTTT');
    this.keyboard = new Keyboard('k_wrapper', 'k_wrapper__keyboard').init();
  }

  init() {
    this.wrapper = new CreateElement('div').init();
    this.wrapper.classList.add(this.className);

    this.wrapper.append(this.textareaPanel);
    this.wrapper.append(this.keyboard);
    return this.wrapper;
  }
}
