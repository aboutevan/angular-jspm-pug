import angular from 'angular';
import Nav from './nav/index';

const Components = angular
	.module('components', [
		Nav
	])
	.name;

export default Components;
