import angular from 'angular';
import ProjectListComponent from './project-list.component'
import ProjectListFocusDirective from './project-list.directive'

const ProjectList = angular
	.module('projectList', [])
	.component('projectList', ProjectListComponent)
	.directive('projectListFocus', ProjectListFocusDirective)
	.name;

export default ProjectList;
