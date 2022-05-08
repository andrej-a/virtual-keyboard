import CreateElement from './createElement';

export default class Description {
  constructor(className, text) {
    this.description = new CreateElement('p').init();
    this.description.classList.add(className);
    this.description.innerText = text;
  }

  init() {
    return this.description;
  }
}
