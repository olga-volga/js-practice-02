function checkTextInput(selector) {
	const textInputs = document.querySelectorAll(selector);

	textInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\w/ig, '');
		});
	});
}

export default checkTextInput;