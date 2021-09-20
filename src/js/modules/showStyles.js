function showStyles(triggerSelector, stylesSelector) {
	const trigger = document.querySelector(triggerSelector),
		  styles = document.querySelectorAll(stylesSelector);

	styles.forEach(item => {
		item.classList.add('animated', 'fadeInUp');
	});

	trigger.addEventListener('click', (e) => {
		if (e.target) {
			e.target.style.display = 'none';
		}
		styles.forEach(item => {
			item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});
	});
}

export default showStyles;