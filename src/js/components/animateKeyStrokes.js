export default class KeystrokesAnimate {
  constructor(array, activeClassName) {
    const buttons = [...array];
    buttons.forEach((btn) => {
      btn.addEventListener('mousedown', () => {
        if (btn.code === 'CapsLock') {
          btn.classList.toggle(activeClassName);
        } else {
          btn.classList.add(activeClassName);
        }
      });

      btn.addEventListener('mouseup', () => {
        if (btn.code !== 'CapsLock') {
          btn.classList.remove(activeClassName);
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (btn.code !== 'CapsLock') {
          btn.classList.remove(activeClassName);
        }
      });
    });
  }
}
