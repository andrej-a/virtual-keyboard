export default class Textarea {
  constructor(className) {
    this.textarea = null;
    this.className = className;
    this.string = '';
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add(this.className);
    this.textarea.autofocus = true;
    return this.textarea;
  }

  setString(value) {
    this.textarea.value += value;
    this.textarea.focus();
  }
}
