function accordion(headingsSelector) {
	const headings = document.querySelectorAll(headingsSelector);

	function hideBlock(elem) {
		elem.classList.remove('active-heading');
		elem.nextElementSibling.classList.remove('active-block');
	}
	function toggleBlock(elem) {
		elem.classList.toggle('active-heading');
		elem.nextElementSibling.classList.toggle('active-block');
	}

	headings.forEach(item => {
		item.addEventListener('click', function() {
			headings.forEach(item => {
				if (!this.classList.contains('active-heading')) {
					hideBlock(item);
				}
			});
			toggleBlock(this);
		});
	});
}

export default accordion;