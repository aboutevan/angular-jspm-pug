import LogoComponent from './logo.component'
import LogoAnimationDirective from './logo.directive'

const Logo = angular
	.module('logo', [])
	.component('logo', LogoComponent)
	.directive('logoAnimation', LogoAnimationDirective)
	.name;

export default Logo;