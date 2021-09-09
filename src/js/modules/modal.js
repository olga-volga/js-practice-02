function modal() {
	let triggerClicked = false;

	function showModal(elem) {
		elem.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${calcScrollWidth()}px`;
		try {
			document.querySelector('.fixed-gift').style.marginRight = `${calcScrollWidth()}px`;
		}
		catch(e) {}
	}

	function closeModal(elem) {
		elem.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = '0px';
		try {
			document.querySelector('.fixed-gift').style.marginRight = '0px';
		}
		catch(e) {}
	}

	function calcScrollWidth() {
		let div = document.createElement('div');
		div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
		document.body.append(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}

	function bindModal(triggerSelector, closeSelector, modalSelector, deleteTrigger = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			  close = document.querySelectorAll(closeSelector),
			  modal = document.querySelector(modalSelector),
			  windows = document.querySelectorAll('[data-modal]');

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				triggerClicked = true;

				windows.forEach(item => {
					closeModal(item);
					item.classList.add('animated', 'fadeIn');
				});
				if (e.target && deleteTrigger) {
					e.target.remove();
				}
				showModal(modal);
			});
		});

		close.forEach(item => {
			item.addEventListener('click', () => {
				windows.forEach(item => {
					closeModal(item);
				});
				closeModal(modal);
			});
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				windows.forEach(item => {
					closeModal(item);
				});
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

	function showModalByScroll(selector) {
		window.addEventListener('scroll', () => {
			if (!triggerClicked && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
				document.querySelector(selector).click();
			}
		});
		
		
	}

	bindModal('.button-design', '.popup-close', '.popup-design');
	bindModal('.button-consultation', '.popup-close', '.popup-consultation');
	bindModal('.fixed-gift', '.popup-close', '.popup-gift', true);

	//showModalByTime('.popup-consultation', 5000);
	showModalByScroll('.fixed-gift');
	
}

export default modal;