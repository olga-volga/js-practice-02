function checkTextInput() {
	const nameInputs = document.querySelectorAll('[name="name"]'),
		  textInputs = document.querySelectorAll('[name="message"]');

	nameInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\w/g, '');
		});
	});
}

export default checkTextInput;