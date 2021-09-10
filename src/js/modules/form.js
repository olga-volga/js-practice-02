function form() {
	const forms = document.querySelectorAll('form'),
		  inputs = document.querySelectorAll('input'),
		  phoneInputs = document.querySelectorAll('input[name="phone"]'),
		  popupContent = document.querySelectorAll('.popup-content');

	const message = {
		load: 'Идет отправка...',
		success: 'Отправлено!',
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
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					setTimeout(() => {
						statusMessage.remove();
					}, 5000)
				});
		});
	});
}

export default form;