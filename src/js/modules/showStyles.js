function showStyles() {
	const trigger = document.querySelector('.button-styles'),
		  styles = document.querySelectorAll('.styles .hidden-lg');

	trigger.addEventListener('click', (e) => {
		if (e.target) {
			e.target.style.display = 'none';
		}
		styles.forEach(item => {
			item.style.cssText = 'display:block !important;';
		});
	});
}

export default showStyles;