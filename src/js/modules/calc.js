import {getResource} from '../services/requests';
import showError from './showError';

function calc(sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, order) {
	const size = document.querySelector(sizeSelector),
		  material = document.querySelector(materialSelector),
		  options = document.querySelector(optionsSelector),
		  promocode = document.querySelector(promocodeSelector),
		  result = document.querySelector(resultSelector);

	let sum = 0;

	// Calculate price using values got from db.json

	function calcPrice(sizeValue, materialValue, optionValue = 0, promocodeValue) {
		sum = Math.round((+sizeValue) * (+materialValue) + (+optionValue));

		if (!sizeValue || !materialValue) {
			result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
		} else if (promocodeValue === 'IWANTPOPART') {
			sum = Math.round(sum * 0.7);
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		} else {
			result.textContent = `Стоимость заказа: ${sum} рублей`;
			document.querySelector('.button-calc').disabled = false;
		}
		order.sum = sum;
	}

	size.addEventListener('change', (e) => {
		let value;
		getResource('http://localhost:3000/size')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case 'Выберите размер картины':
							value = '';
							break;
						case '40x50':
							value = item.small;
							break;
						case '50x70':
							value = item.middle;
							break;
						case '70x70':
							value = item.large;
							break;
						case '70x100':
							value = item.extra;
							break;
					}
				});
				e.target.setAttribute('value', `${value}`);
				calcPrice(value, material.getAttribute('value'), options.getAttribute('value'));
				order.size = e.target.value;
				console.log(order);
			})
			.catch(() => showError('.calc-price'));
	});
	material.addEventListener('change', (e) => {
		let value;
		getResource('http://localhost:3000/material')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case 'Выберите материал картины':
							value = '';
							break;
						case 'Холст из волокна':
							value = item.fiber;
							break;
						case 'Льняной холст':
							value = item.linen;
							break;
						case 'Холст из натурального хлопка':
							value = item.cotton;
							break;
					}
				});
				e.target.setAttribute('value', `${value}`);
				calcPrice(size.getAttribute('value'), value, options.getAttribute('value'));
				order.material = e.target.value;
				console.log(order);
			})
			.catch(err => console.log(err));

	});
	options.addEventListener('change', (e) => {
		let value;
		getResource('http://localhost:3000/option')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case 'Дополнительные услуги':
							value = '0';
							break;
						case 'Покрытие арт-гелем':
							value = item.cover;
							break;
						case 'Экспресс-изготовление':
							value = item.express;
							break;
						case 'Доставка готовых работ':
							value = item.delivery;
							break;
					}
				});
				e.target.setAttribute('value', `${value}`);
				calcPrice(size.getAttribute('value'), material.getAttribute('value'), value);
				order.options = e.target.value;
				console.log(order);
			})
			.catch(err => console.log(err));
	});
	promocode.addEventListener('input', (e) => {
		let value = e.target.value;
		calcPrice(size.getAttribute('value'), material.getAttribute('value'), options.getAttribute('value'), value);
		order.promocode = e.target.value;
		console.log(order);
	});


	// Calculate price using static values got from index.html

	/*function calcPrice() {
		sum = Math.round((+size.value) * (+material.value) + (+options.value));

		if (size.value == '' || material.value == '') {
			result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
		} else if (promocode.value === 'IWANTPOPART') {
			sum = Math.round(sum * 0.7);
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		} else {
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		}
		order.sum = sum;

		if (size.value && material.value) {
			document.querySelector('.button-calc').disabled = false;
		} else {
			document.querySelector('.button-calc').disabled = true;
		}
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
	*/

}

export default calc;