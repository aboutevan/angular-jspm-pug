import ProjectListController from './project-list.controller.js'
import template from './project-list.component.html!text'

const ProjectListComponent = {
	controller: ProjectListController,
	template: template,
	bindings: {
		props: '<'
	}
}

export default ProjectListComponent;
