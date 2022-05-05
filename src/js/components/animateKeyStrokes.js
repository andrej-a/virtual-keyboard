export default class KeystrokesAnimate {
  constructor(btn, activeClassName) {
    btn.addEventListener('mousedown', () => {
      btn.classList.add(activeClassName);
    });

    btn.addEventListener('mouseup', () => {
      btn.classList.remove(activeClassName);
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove(activeClassName);
    });
  }
}
