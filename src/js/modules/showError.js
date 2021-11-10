function showError(elem) {
	let errorMessage = document.createElement('div');
	errorMessage.classList.add('error');
	errorMessage.style.cssText = 'text-align:center;padding:15px;';
	errorMessage.textContent = 'Что-то пошло не так... Попробуйте позже';

	document.querySelector(elem).after(errorMessage);
}

export default showError;