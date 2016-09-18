import angualr from 'angular';
import Box from './box/index';
import ProjectList from './project-list/index';
import Home from './home/index';
import Logo from './logo/index';

const Components = angular
	.module('components', [
		Box,
		ProjectList,
		Home,
		Logo
	])
	.name

export default Components;
