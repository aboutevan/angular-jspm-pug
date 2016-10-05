import angular from 'angular';
import Home from './home/index';

const Pages = angular
	.module('pages', [
		Home
	])
	.name;

export default Pages;
