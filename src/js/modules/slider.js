function slider() {
	const slides = document.querySelectorAll('.main-slider-item'),
		  slidesWrapper = document.querySelector('.main-slider');

	let slideIndex = 1;

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
		slides[slideIndex - 1].classList.add('animated', 'fadeInDownBig');
	}

	function changeIndex(n) {
		showSlide(slideIndex += n);
	}

	showSlide(slideIndex);

	setInterval(() => {
		changeIndex(1);
	}, 2500);
}

export default slider;