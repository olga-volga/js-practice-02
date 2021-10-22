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

	size.addEventListener('change', (e) => {
		//console.log(e.target.value);
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
		order[size] = sizeValue;
		//console.log(order[size]);
		return sizeValue;
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