function showError(elem) {
	let errorMessage = document.createElement('div');
	errorMessage.classList.add('error');
	errorMessage.style.cssText = 'text-align:center;padding:30px;';
	errorMessage.textContent = 'Что-то пошло не так... Попробуйте позже';
	document.querySelector(elem).append(errorMessage);
}

export default showError;