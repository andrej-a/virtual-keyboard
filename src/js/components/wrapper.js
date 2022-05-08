import CreateElement from './createElement';
import Keyboard from './keyboard';
import Description from './description';

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
    this.wrapper.append(new Description('task_description', 'RSSchool virtual keyboard task').init());
    this.wrapper.append(this.keyboard);
    this.wrapper.append(new Description('task_description', 'For Windows').init());
    this.wrapper.append(new Description('instructions', 'Press Right Ctrl + Enter to change language').init());
    return this.wrapper;
  }
}
