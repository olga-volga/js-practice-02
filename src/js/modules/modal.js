function modal() {
	const trigger = document.querySelectorAll('.button-design'),
		  close = document.querySelectorAll('.popup-close'),
		  modal = document.querySelector('.popup-design');

	function showModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	trigger.forEach(item => {
		item.addEventListener('click', showModal);
	});

	close.forEach(item => {
		item.addEventListener('click', closeModal);
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});
}

export default modal;