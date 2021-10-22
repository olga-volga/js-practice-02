import {closeModal} from './modal';
import {postData} from '../services/requests';

function form(order) {
	const forms = document.querySelectorAll('form'),
		  inputs = document.querySelectorAll('input'),
		  phoneInputs = document.querySelectorAll('input[name="phone"]'),
		  imgInputs = document.querySelectorAll('input[name="upload"]'),
		  selects = document.querySelectorAll('select'),
		  windows = document.querySelectorAll('[data-modal]');

	const message = {
		load: 'Идет отправка...',
		success: 'Отправлено! Скоро мы с вами свяжемся',
		fail: 'Произошла ошибка...',
		loadImg: 'assets/img/spinner.gif',
		successImg: 'assets/img/ok.png',
		failImg: 'assets/img/fail.png'
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php'
	}

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		imgInputs.forEach(item => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
		selects.forEach(item => {
			item.value = '';
		});
	};

	const clearOrder = () => {
		for (let key in order) {
			if (key === 'options') {
				order[key] = 0;
			} else {
				delete order[key];
			}
		}
	};

	imgInputs.forEach(item => {
		item.addEventListener('input', () => {
			let dots;
			const arrName = item.files[0].name.split('.');
			arrName[0].length > 5 ? dots = '...' : dots = '.';

			const imgName = arrName[0].slice(0, 5) + dots + arrName[1];

			item.previousElementSibling.textContent = imgName;
		});
	});

	forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.style.cssText = 'display:flex;flex-direction:column;align-items:center;';
			item.parentNode.append(statusMessage);
			item.classList.add('animated', 'fadeOutUp');
			item.style.display = 'none';

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.loadImg);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.append(statusImg);

			let statusText = document.createElement('h4');
			statusText.textContent = message.load;
			statusMessage.append(statusText);

			const formData = new FormData(item);

			if (item.getAttribute('data-calc') === 'calc') {
				for (let key in order) {
					formData.append(key, order[key]);
				}
			}

			let api;
			item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

			postData(api, formData)
				.then(res => {
					console.log(res);
					console.log(api);
					statusImg.setAttribute('src', message.successImg);
					statusText.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.failImg);
					statusText.textContent = message.fail;
				})
				.finally(() => {
					clearInputs();
					document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
					clearOrder();
					document.querySelector('.button-calc').disabled = true;
					setTimeout(() => {
						statusMessage.remove();
						item.classList.remove('animated', 'fadeOutUp');
						item.classList.add('animated', 'fadeInUp');
						item.style.display = 'block';
						windows.forEach(window => {
							closeModal(window);
						});
					}, 5000)
				});
		});
	});
}

export default form;