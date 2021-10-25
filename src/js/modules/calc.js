import {getResource} from '../services/requests';

function calc(sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, order) {
	const size = document.querySelector(sizeSelector),
		  material = document.querySelector(materialSelector),
		  options = document.querySelector(optionsSelector),
		  promocode = document.querySelector(promocodeSelector),
		  result = document.querySelector(resultSelector);

	let sum = 0;

	// Calculate price using values got from db.json

	function calcPrice() {
		sum = Math.round((+order.size) * (+order.material) + (+order.options));

		if (order.size == '' || order.material == '') {
			result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
		} else if (promocode.value === 'IWANTPOPART') {
			sum = Math.round(sum * 0.7);
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		} else {
			result.textContent = `Стоимость заказа: ${sum} рублей`;
		}
		order.sum = sum;

		if (order.size && order.material) {
			document.querySelector('.button-calc').disabled = false;
		} else {
			document.querySelector('.button-calc').disabled = true;
		}
	}

	size.addEventListener('change', (e) => {
		let sizeValue = '';
		getResource('http://localhost:3000/size')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case '40x50':
							sizeValue = item.small;
							break;
						case '50x70':
							sizeValue = item.middle;
							break;
						case '70x70':
							sizeValue = item.large;
							break;
						case '70x100':
							sizeValue = item.extra;
							break;
					}
				});
				order.size = sizeValue;
				calcPrice();
				console.log(order);
			})
			.catch(() => showError());

	});
	material.addEventListener('change', (e) => {
		let materialValue = '';
		getResource('http://localhost:3000/material')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case 'Холст из волокна':
							materialValue = item.fiber;
							break;
						case 'Льняной холст':
							materialValue = item.linen;
							break;
						case 'Холст из натурального хлопка':
							materialValue = item.cotton;
							break;
					}
				});
				order.material = materialValue;
				calcPrice();
				console.log(order);
			})
			.catch(() => showError());

	});
	options.addEventListener('change', (e) => {
		let optionsValue = '';
		getResource('http://localhost:3000/option')
			.then(data => {
				data.forEach(item => {
					switch(e.target.value) {
						case 'Покрытие арт-гелем':
							optionsValue = item.cover;
							break;
						case 'Экспресс-изготовление':
							optionsValue = item.express;
							break;
						case 'Доставка готовых работ ':
							optionsValue = item.delivery;
							break;
					}
				});
				order.options = optionsValue;
				calcPrice();
				console.log(order);
			})
			.catch(() => showError());

	});

	/*size.addEventListener('change', (e) => {
		let sizeValue = '';
		getResource('http://localhost:3000/size')
			.then(data => {
				switch(e.target.value) {
					case '40x50':
						sizeValue = data[0].small;
						break;
					case '50x70':
						sizeValue = data[0].middle;
						break;
					case '70x70':
						sizeValue = data[0].large;
						break;
					case '70x100':
						sizeValue = data[0].extra;
						break;
				}
			})
			//.catch(() => showError());
		//calcPrice(sizeValue, material.value, options.value);
		order[size] = sizeValue;
		console.log(sizeValue);
		console.log(order);
	});*/
	/*material.addEventListener('change', (e) => {
		let materialValue = '';
		getResource('http://localhost:3000/material')
			.then(data => {
				switch(e.target.value) {
					case 'Холст из волокна':
						materialValue = data[0].fiber;
						break;
					case 'Льняной холст':
						materialValue = data[0].linen;
						break;
					case 'Холст из натурального хлопка':
						materialValue = data[0].cotton;
						break;
				}
			})
			//.catch(() => showError());
		calcPrice(size.value, materialValue, options.value);
		order[material] = materialValue;
		console.log(materialValue);
		console.log(order);
	});
	options.addEventListener('change', (e) => {
		let optionsValue = '';
		getResource('http://localhost:3000/option')
			.then(data => {
				switch(e.target.value) {
					case 'Покрытие арт-гелем':
						optionsValue = data[0].cover;
						break;
					case 'Экспресс-изготовление':
						optionsValue = data[0].express;
						break;
					case 'Доставка готовых работ ':
						optionsValue = data[0].delivery;
						break;
				}
			})
			//.catch(() => showError());
		calcPrice(size.value, material.value, optionsValue);
		order[options] = optionsValue;
		console.log(optionsValue);
		console.log(order);
	});*/


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