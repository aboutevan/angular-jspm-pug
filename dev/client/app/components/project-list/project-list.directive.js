import { TweenLite, TimelineLite } from 'gsap';

class ProjectListFocus {
	constructor () {
		this.restrict = 'A';
	}
	link (scope, $el, attrs, ctrl) {
		const self = this;
		const $doc = angular.element(document)[0];
		const $background = $doc.querySelector('.box-slider__color-overlay');
		const $slides = $doc.getElementsByClassName('box-slider__slide');
		const $projects = $doc.getElementsByClassName('project-list__item');
		const boxHeight = $doc.querySelector('.box-slider').offsetHeight;
		const $logo = $doc.querySelector('.home__logo');
		const speed = 0.8;
		let sliderActive = false;
		let animating = false;
		const tlOut = new TimelineLite();
		const tl = new TimelineLite({
			onComplete: () => {
				return animating = false;
			}
		});

		function assignEvents () {
			// open project
			[].forEach.call($projects, (project, index) => {
				project.addEventListener('click', () => {
					// animate in
					if (!sliderActive) {
						self.fadeBoxIn(TweenLite, $background, speed)
						sliderActive = true
					}
					// prevent event if animating
					if(!animating) {
						// animate between slides
						if (!$slides[index].classList.contains('active')) {
							animating = true
							self.goToSlide(tl, $slides, speed, index)
						}
					}
				})
			})
			// close projects
			$logo.addEventListener('click', () => {
				if (sliderActive) {
					self.fadeBoxOut(tlOut, $background, $slides, speed)
					sliderActive = false
				}
			});
		}

		angular.element(document).ready(() => {
			assignEvents();
		})
	}
	fadeBoxIn (tween, el, speed) {
		tween.to(el, speed * 0.5, {
			backgroundColor: '#202325'
		})
	}
	fadeBoxOut (tl, el, slides, speed) {
		tl.to(slides, speed, {
			opacity: 0
		})
		tl.set(slides, {
			className: '-=active'
		})
		tl.to(el, speed, {
			backgroundColor: 'none'
		})
	}
	goToSlide (timeline, el, speed, index) {
		timeline.to(el, speed, {
			opacity: 0
		})
		timeline.set(el, {
			className: '-=active'
		})
		timeline.set(el[index], {
			className: '+=active'
		})
		timeline.to(el[index], speed, {
			opacity: 1
		})
	}
}

const ProjectListFocusDirective = () => {
	return new ProjectListFocus
}

export default ProjectListFocusDirective;