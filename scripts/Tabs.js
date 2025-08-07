const rootSelector = '[data-js-tabs]'

class Tabs {
	selectors = {
		root: rootSelector,
		button: '[data-js-tabs-button]',
		content: '[data-js-tabs-content]'
	}

	stateClasses = {
		isActive: 'is-active',
	}

	stateAttributes = {
		ariaSelected: 'aria-selected',
		tabIndex: 'tabindex',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button)
		this.contentElements = this.rootElement.querySelectorAll(this.selectors.content)
		this.state = {
			activeTabIndex: [...this.buttonElements].findIndex((buttonElement) => {
				return buttonElement.classList.contains(this.stateClasses.isActive)
			})
		}
		this.limitTabsIndex = this.buttonElements.length - 1
		this.bindEvents()
	}

	updateUI() {
		const { activeTabIndex } = this.state
		this.buttonElements.forEach((buttonElement, index) => {
			const isActive = index === activeTabIndex

			buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
			buttonElement.setAttribute(this.stateAttributes.ariaSelected, isActive.toString())
			buttonElement.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : '-1')
		})

		this.contentElements.forEach((element, index) => {
			const isActive = index === activeTabIndex

			element.classList.toggle(this.stateClasses.isActive, isActive)
		})
	}

	onButtonClick(buttonIndex) {
		this.state.activeTabIndex = buttonIndex
		this.updateUI()
	}

	bindEvents() {
		this.buttonElements.forEach((button, index) => {
			button.addEventListener('click', () => this.onButtonClick(index))
		})
	}
}

class TabsCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach(tab => {
			new Tabs(tab)
		})
	}
}

export default TabsCollection