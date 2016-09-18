import controller from './box.controller.js'
import template from './box.component.html!text'

const BoxComponent = {
	controller,
	template,
	bindings: {
		props: '<'
	}
}

export default BoxComponent;
