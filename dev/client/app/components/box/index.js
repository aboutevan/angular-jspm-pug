import angular from 'angular';
import BoxComponent from './box.component'

const Box = angular
	.module('box', [])
	.component('box', BoxComponent)
	.name;

export default Box;
