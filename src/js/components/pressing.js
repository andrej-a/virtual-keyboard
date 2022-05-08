export default class PressingPhysicalButton {
  constructor(active) {
    this.activeClass = active;
    this.allowed = true;
  }

  keyDown(array) {
    const arrayBtn = [...array];
    this.keyUp(arrayBtn);
    document.addEventListener('keydown', (e) => {
      if (e.repeat !== undefined) {
        this.allowed = !e.repeat;
      }

      if (!this.allowed) return; // stop repeat keydown event

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
      this.allowed = true;
    });
  }
}
