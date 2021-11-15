function scroll() {
	const upBtn = document.querySelector('.pageup'),
		  docElement = document.documentElement,
		  body = document.body;

	function softScroll(start, end, hash) {
		let timeInterval = 1,
			prevScrollTop,
			speedScroll;

		if (end > start) {
			speedScroll = 30;
		} else {
			speedScroll = -30;
		}

		let move = setInterval(() => {
			let scrollTop = Math.round(body.scrollTop || docElement.scrollTop);
			if (prevScrollTop === scrollTop || (end > start && scrollTop === end) || (end < start && scrollTop <= end)) {
				clearInterval(move);
				history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
			} else {
				body.scrollTop += speedScroll;
				docElement.scrollTop += speedScroll;
				prevScrollTop = scrollTop;
			}
		}, timeInterval);
	}

	window.addEventListener('scroll', () => {
		if (docElement.scrollTop > 700) {
			upBtn.classList.add('animated', 'fadeIn');
			upBtn.classList.remove('fadeOut');
		} else {
			upBtn.classList.add('fadeOut');
			upBtn.classList.remove('fadeIn');
		}
	});

	function calcScroll() {
		upBtn.addEventListener('click', function(e) {
			let scrollTop = Math.round(body.scrollTop || docElement.scrollTop);

			if (this.hash !== '') {
				e.preventDefault();

				let hashElement = document.querySelector(this.hash),
					hashElementTop = 0;

				while (hashElement.offsetParent) {
					hashElementTop += hashElement.offsetTop;
					hashElement = hashElement.offsetParent;
				}

				hashElementTop = Math.round(hashElementTop);
				softScroll(scrollTop, hashElementTop, this.hash);
			}
		});
	}
	calcScroll();
}

export default scroll;