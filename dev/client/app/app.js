import angular from 'angular';
import Common from './common/components/index';
import Components from './components/index';
import 'angular-sanitize';


const app = angular
	.module('app', [
		Common,
		Components,
		'ngSanitize'
	])
	.component('app', [])
	.name;

export default app;