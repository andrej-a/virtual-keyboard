import Wrapper from './wrapper';

export default class Initialization {
  constructor(tag) {
    this.parent = document.querySelector(tag);
    this.wrapper = new Wrapper('wrapper').init();
  }

  init() {
    this.parent.append(this.wrapper);
  }
}
