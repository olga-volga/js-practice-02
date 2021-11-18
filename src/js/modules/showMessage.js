function showMessage(elemSelector, message) {
	let textMessage = document.createElement('div');
	textMessage.classList.add('error');
	textMessage.style.cssText = 'text-align:center;padding:15px;';
	textMessage.textContent = message;

	document.querySelector(elemSelector).after(textMessage);
	setTimeout(() => {
		textMessage.remove();
	}, 5000);
}

export default showMessage;