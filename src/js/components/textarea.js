export default class Textarea {
  constructor(className) {
    this.textarea = null;
    this.className = className;
    this.position = 0;
    this.upperCaseText = false;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add(this.className);
    this.textarea.autofocus = true;
    this.updatePositionByClick();
    return this.textarea;
  }

  setUpperCase(value) {
    this.upperCaseText = value;
    console.log(this.upperCaseText);
  }

  updatePositionByClick() {
    this.textarea.addEventListener('click', () => {
      this.position = this.getPosition(this.textarea);
      console.log(this.position);
    });
  }

  updatePositionByKeyboard(n) {
    this.position += n;
    this.position = this.position < 0 ? 0 : this.position;
    console.log(this.position);
  }

  setString(value) {
    const start = this.textarea.value.slice(0, this.position);
    const finish = this.textarea.value.slice(this.position);
    this.textarea.value = `${start}${this.upperCaseText ? value.toUpperCase() : value.toLowerCase()}${finish}`;
    this.position += value.length;
    this.textarea.focus();
    this.textarea.setSelectionRange(this.position, this.position);
    console.log(this.position);
  }

  deleteLetter(rangeStart, rangeFinish) {
    if (rangeStart === 1 && this.position === 0) {
      this.textarea.focus();
      return;
    }
    const start = this.textarea.value.slice(0, this.position - rangeStart);
    const finish = this.textarea.value.slice(this.position + rangeFinish);
    this.textarea.value = `${start}${finish}`;

    this.position = start.length;
    this.textarea.setSelectionRange(this.position, this.position);
    this.textarea.focus();
    console.log(this.position);
  }

  getPosition(obj) {
    obj.focus();
    if (obj.selectionStart) {
      return obj.selectionStart;
    }
    if (document.selection) {
      const sel = document.selection.createRange();
      const clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(obj);
      clone.setEndPoint('EndToEnd', sel);
      this.position = clone.text.length;
      return this.position;
    }
    return 0;
  }
}
