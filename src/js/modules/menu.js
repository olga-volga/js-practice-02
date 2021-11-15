function menu(btnSelector, menuListSelector) {
	const btn = document.querySelector(btnSelector),
		  menuList = document.querySelector(menuListSelector);

	menuList.style.display = 'none';

	btn.addEventListener('click', () => {
		if (window.screen.availWidth < 993 && menuList.style.display == 'none') {
			menuList.style.display = 'block';
		} else {
			menuList.style.display = 'none';
		}
	});
	window.addEventListener('resize', () => {
		if (window.screen.availWidth > 992) {
			menuList.style.display = 'none';
		}
	});
}

export default menu;