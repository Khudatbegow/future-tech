class Header {
  selectors = {
    rootContainer: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.rootContainer);
    this.overlayElement = document.querySelector(this.selectors.overlay);
    this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
    this.htmlElement = document.documentElement;
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.htmlElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick);
  }
}

export default Header;
