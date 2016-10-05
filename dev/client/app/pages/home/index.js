import angualr from 'angular';
import HomeComponent from './home.component'

const Home = angular
	.module('home', [])
	.component('home', HomeComponent)
	.name;

export default Home;