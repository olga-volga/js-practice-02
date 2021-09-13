import modal from './modules/modal';
import slider from './modules/slider';
import form from './modules/form';
//import changeModalData from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let modalData = {};

	modal();
	slider('.main-slider-item', '.main-slider', 'vertical');
	slider('.feedback-slider-item', '.feedback-slider', 'horizontal', '.main-prev-btn', '.main-next-btn');
	form(modalData);
	//changeModalData(modalData);
});