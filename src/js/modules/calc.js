import {getResource} from '../services/requests';

function calc(sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector) {
	const size = document.querySelector(sizeSelector),
		  material = document.querySelector(materialSelector),
		  options = document.querySelector(optionsSelector),
		  promocode = document.querySelector(promocodeSelector),
		  result = document.querySelector(resultSelector);

	let sum = 0;

	function calcPrice() {
		sum = Math.round((+size.value) * (+material.value) + (+options.value));

		if (size.value == '' || material.value == '') {
			result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
		} else if (promocode.value === 'IWANTPOPART') {
			result.textContent = `Стоимость заказа: ${Math.round(sum * 0.7)} рублей`;
		} else {
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		}
	}

	size.addEventListener('change', calcPrice);
	material.addEventListener('change', calcPrice);
	options.addEventListener('change', calcPrice);
	promocode.addEventListener('input', calcPrice);

}

export default calc;