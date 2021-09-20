import modal from './modules/modal';
import slider from './modules/slider';
import form from './modules/form';
import validatePhone from './modules/validatePhone';
import checkTextInput from './modules/checkTextInput';
import showStyles from './modules/showStyles';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modal();
	slider('.main-slider-item', '.main-slider', 'vertical');
	slider('.feedback-slider-item', '.feedback-slider', 'horizontal', '.main-prev-btn', '.main-next-btn');
	form();
	validatePhone('input[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
	showStyles('.button-styles', '.styles-2');
});