function modal() {

	function showModal(elem) {
		elem.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal(elem) {
		elem.style.display = 'none';
		document.body.style.overflow = '';
	}

	function bindModal(triggerSelector, closeSelector, modalSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			  close = document.querySelectorAll(closeSelector),
			  modal = document.querySelector(modalSelector);

		trigger.forEach(item => {
			item.addEventListener('click', () => {
				showModal(modal);
			});
		});

		close.forEach(item => {
			item.addEventListener('click', () => {
				closeModal(modal);
			});
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal(modal);
			}
		});
	}

	bindModal('.button-design', '.popup-close', '.popup-design');
	bindModal('.button-consultation', '.popup-close', '.popup-consultation');
	bindModal('.fixed-gift', '.popup-close', '.popup-gift');
}

export default modal;