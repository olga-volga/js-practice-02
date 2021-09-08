function slider(slidesSelector, slidesWrapperSelector, animationDirection, prevBtn, nextBtn) {
	const slides = document.querySelectorAll(slidesSelector),
		  slidesWrapper = document.querySelector(slidesWrapperSelector);

	let slideIndex = 1,
		timerId;

	function hideSlide() {
		slides.forEach(item => {
			item.style.display = 'none';
		});
	}

	function showSlide(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		hideSlide();
		slides[slideIndex - 1].style.display = 'block';
	}

	function changeIndex(n) {
		showSlide(slideIndex += n);
	}

	function activateAnimation() {
		if (animationDirection === 'vertical') {
			timerId = setInterval(() => {
				changeIndex(1);
				slides[slideIndex - 1].classList.add('animated', 'slideInDown');
			}, 2500);
		} else {
			timerId = setInterval(() => {
				changeIndex(1);
				slides[slideIndex - 1].classList.remove('animated', 'slideInRight');
				slides[slideIndex - 1].classList.add('animated', 'slideInLeft');
			}, 3000);
		}
	}

	showSlide(slideIndex);

	try {
		const arrowPrev = document.querySelector(prevBtn),
			  arrowNext = document.querySelector(nextBtn);

		arrowPrev.addEventListener('click', () => {
			changeIndex(-1);
			slides[slideIndex - 1].classList.remove('animated', 'slideInLeft');
			slides[slideIndex - 1].classList.add('animated', 'slideInRight');
		});
		arrowNext.addEventListener('click', () => {
			changeIndex(1);
			slides[slideIndex - 1].classList.remove('animated', 'slideInRight');
			slides[slideIndex - 1].classList.add('animated', 'slideInLeft');
		});
	} catch(e) {}

	activateAnimation();

	slidesWrapper.addEventListener('mouseleave', () => {
		activateAnimation();
	});

	slidesWrapper.addEventListener('mouseenter', () => {
		clearInterval(timerId);
	});
	
}

export default slider;