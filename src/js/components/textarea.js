export default class Textarea {
  constructor(className) {
    this.textarea = null;
    this.className = className;
    this.value = '';
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add(this.className);
    return this.textarea;
  }

  setString(area, val) {
    let a = area;
    this.value += val;
    a.value = this.value;
  }
}
