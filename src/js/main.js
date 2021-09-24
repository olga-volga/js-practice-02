import modal from './modules/modal';
import slider from './modules/slider';
import form from './modules/form';
import validatePhone from './modules/validatePhone';
import checkTextInput from './modules/checkTextInput';
import showStyles from './modules/showStyles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let orderForm = {
		options: 0
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
});