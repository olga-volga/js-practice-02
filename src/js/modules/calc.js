import {getResource} from '../services/requests';

function calc() {
	const size = document.querySelector('#size'),
		  material = document.querySelector('#material'),
		  options = document.querySelector('#options'),
		  promocode = document.querySelector('.promocode'),
		  priceBlock = document.querySelector('.calc-price');

	let sum;

	function calcPrice() {
		sum = ((+size.value) * (+material.value)) + (+options.value);

		if (size.value == '' || material.value == '') {
			console.log(1);
		} else {
			priceBlock.textContent = `Стоимость заказа: ${sum} рублей`;
		}

		
	}

	size.addEventListener('change', calcPrice);
	material.addEventListener('change', calcPrice);
	options.addEventListener('change', calcPrice);

}

export default calc;