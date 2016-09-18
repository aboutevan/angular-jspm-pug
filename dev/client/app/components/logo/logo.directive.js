import angular from 'angular';
import { TimelineMax, TweenMax } from 'gsap';

class LogoAnimation {
	constructor () {
		this.restrict = 'A';
	}
	link (scope, $el, attrs, ctrl) {
		const logo = $el[0].getElementsByClassName('logo__logo-wrap');
		const shadow = $el[0].getElementsByClassName('logo__shadow');
		const tl = new TimelineMax({});
		const speed = 2;

		tl
			.add('start')
			.to(logo, 2, {
				y: attrs.y || '-7%',
				repeat: -1,
				yoyo: true,
				ease: Power1.easeInOut
			}, 'start')
			.to(shadow, 2, {
				scaleX: attrs.scale || '0.9',
				repeat: -1,
				yoyo: true,
				ease: Power1.easeInOut
			}, 'start');

	}
}

const LogoAnimationDirective = () => {
	return new LogoAnimation
};

export default LogoAnimationDirective;