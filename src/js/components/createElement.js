export default class CreateElement {
  constructor(tag) {
    this.element = null;
    this.tag = tag;
  }

  init() {
    this.element = document.createElement(this.tag);
    return this.element;
  }
}
