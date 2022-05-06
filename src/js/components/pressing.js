export default class PressingPhysicalButton {
  constructor(active) {
    this.activeClass = active;
  }

  keyDown(array) {
    const arrayBtn = [...array];
    this.keyUp(arrayBtn);
    document.addEventListener('keydown', (e) => {
      arrayBtn.forEach((btn) => {
        if (btn.code === 'CapsLock' && btn.code === e.code) {
          btn.classList.toggle(this.activeClass);
        } else if (btn.code === e.code) {
          btn.classList.add(this.activeClass);
        }
      });
    });
  }

  keyUp(array) {
    document.addEventListener('keyup', (e) => {
      array.forEach((btn) => {
        if (btn.code !== 'CapsLock' && btn.code === e.code) {
          btn.classList.remove(this.activeClass);
        }
      });
    });
  }
}
