import modal from './modules/modal';
import slider from './modules/slider';
import form from './modules/form';
import validatePhone from './modules/validatePhone';
import checkTextInput from './modules/checkTextInput';
import showStyles from './modules/showStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import showPicture from './modules/showPicture';
import accordion from './modules/accordion';
import menu from './modules/menu';
import scroll from './modules/scroll';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let orderForm = {
		sum: 0
	};

	modal();
	slider('.main-slider-item', '.main-slider', 'vertical');
	slider('.feedback-slider-item', '.feedback-slider', 'horizontal', '.main-prev-btn', '.main-next-btn');
	form(orderForm);
	validatePhone('input[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
	showStyles('.button-styles', '.styles .container .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price', orderForm);
	filter('.portfolio-menu', 'li', '.portfolio-block', '.portfolio-no');
	showPicture('.sizes-block');
	accordion('.accordion-heading');
	menu('.burger', '.burger-menu');
	scroll('.pageup');
	drop();
});