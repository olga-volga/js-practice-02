import {closeModal} from './modal';

function form(state) {
	const forms = document.querySelectorAll('form'),
		  inputs = document.querySelectorAll('input'),
		  phoneInputs = document.querySelectorAll('input[name="phone"]'),
		  popupContent = document.querySelectorAll('.popup-content');

	const message = {
		load: 'Идет отправка...',
		success: 'Отправлено! Скоро мы с вами свяжемся',
		fail: 'Произошла ошибка...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.load;

		let result = await fetch(url, {
			method: 'POST',
			body: data
		});
		return await result.text();
	};

	const showMessageModal = (message) => {
		const previousModalContent = document.querySelector('.popup-dialog');

		previousModalContent.style.display = 'none';

		const messageModal = document.createElement('div');
		messageModal.classList.add('popup-dialog');
		messageModal.innerHTML = `
			<div class=popup-content>
				<button class=popup-close>&times;</button>
				<h4>${message}</h4>
			</div>
		`;
		if (previousModalContent.parentNode.classList.contains('popup-consultation')) {
			document.querySelector('.popup-consultation').append(messageModal);
		} else {
			document.querySelector('.popup-design').append(messageModal);
		}
		
		setTimeout(() => {
			messageModal.remove();
			previousModalContent.style.display = 'block';
			closeModal(document.querySelector('.popup-consultation'));
		}, 5000);
	};

	forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.append(statusMessage);

			const formData = new FormData(item);
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					showMessageModal(message.success);
				})
				.catch(() => {
					showMessageModal(message.fail);
				})
				.finally(() => {
					//item.reset();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000)
				});
		});
	});
}

export default form;