import modal from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modal();
	slider('.main-slider-item', '.main-slider', 'vertical');
	slider('.feedback-slider-item', '.feedback-slider', 'horizontal', '.main-prev-btn', '.main-next-btn');
});