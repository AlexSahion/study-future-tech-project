class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burger: '[data-js-header-burger]',
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock'
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.overlayElement = document.querySelector(this.selectors.overlay)
		this.burgerElement = document.querySelector(this.selectors.burger)
		this.bindEvents()
	}

	onBurgerClick = () => {
		this.burgerElement.classList.toggle(this.stateClasses.isActive)
		this.overlayElement.classList.toggle(this.stateClasses.isActive)
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	bindEvents() {
		this.burgerElement.addEventListener('click', this.onBurgerClick)
	}
}

export default Header