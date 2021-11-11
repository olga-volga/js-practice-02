function showPicture(blocksSelector) {
	const blocks = document.querySelectorAll(blocksSelector);

	function showImg(elem) {
		const img = elem.querySelector('img'),
			  text = elem.querySelectorAll('p');

		img.src = img.src.slice(0, -4) + '-1.png';
		text.forEach(item => {
			if (!item.classList.contains('sizes-hit')) {
				item.style.display = 'none';
			}
		});
	}
	function hideImg(elem) {
		const img = elem.querySelector('img'),
			  text = elem.querySelectorAll('p');

		img.src = img.src.slice(0, -6) + '.png';
		text.forEach(item => {
			if (!item.classList.contains('sizes-hit')) {
				item.style.display = 'block';
			}
		});
	}

	blocks.forEach((item, i) => {
		item.addEventListener('mouseenter', (e) => {
			showImg(item);
		});
		item.addEventListener('mouseleave', (e) => {
			hideImg(item);
		});
	});
	
}

export default showPicture;