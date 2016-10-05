import angular from 'angular';
import Components from './components/index';
import Pages from './pages/index';

const app = angular
	.module('app', [
		Components,
		Pages
	])
	.component('app', [])
	.name;

export default app;
