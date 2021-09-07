function modal() {

	function showModal(elem) {
		elem.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${calcScrollWidth()}px`;
	}

	function closeModal(elem) {
		elem.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = '0px';
	}

	function calcScrollWidth() {
		let div = document.createElement('div');
		div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
		document.body.append(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
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

	function showModalByTime(selector, time) {
		setTimeout(() => {
			let anyModalShown = false;
			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					anyModalShown = true;
				}
			});
			if (!anyModalShown) {
				showModal(document.querySelector(selector));
			}
		}, time)
	}

	bindModal('.button-design', '.popup-close', '.popup-design');
	bindModal('.button-consultation', '.popup-close', '.popup-consultation');
	bindModal('.fixed-gift', '.popup-close', '.popup-gift');

	showModalByTime('.popup-consultation', 5000);
}

export default modal;