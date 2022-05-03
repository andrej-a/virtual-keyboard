export default class Textarea {
  constructor(className) {
    this.textarea = null;
    this.className = className;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add(this.className);
    return this.textarea;
  }
}
