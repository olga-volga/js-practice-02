import {getResource} from '../services/requests';

function calc(sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, order) {
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
		order.sum = sum;
	}

	function addEventToElem(elem, event, property) {
		elem.addEventListener(event, () => {
			calcPrice();
			order[property] = elem.value;
			console.log(order);
		});
	}

	addEventToElem(size, 'change', 'size');
	addEventToElem(material, 'change', 'material');
	addEventToElem(options, 'change', 'options');
	addEventToElem(promocode, 'input', 'promocode');

}

export default calc;