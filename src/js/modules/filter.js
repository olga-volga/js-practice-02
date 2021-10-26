function filter() {
	const tabHeadersParent = document.querySelector('.portfolio-menu'),
		  tabHeaders = document.querySelectorAll('.portfolio-menu li'),
		  tabsContent = document.querySelectorAll('.portfolio-block'),
		  portfolioMessage = document.querySelector('.portfolio-no');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabHeaders.forEach(item => {
			item.classList.remove('active');
		});
	}
	function filterTabContent(classToFilter = 'all') {
		let isClassPresented;
		
		tabsContent.forEach(item => {
			if (item.classList.contains(classToFilter)) {
				item.style.display = 'block';
				isClassPresented = true;
			}
		});
		tabHeaders.forEach(item => {
			if (item.classList.contains(classToFilter)) {
				item.classList.add('active');
			}
		});
		if (!isClassPresented) {
			portfolioMessage.style.display = 'block';
		} else {
			portfolioMessage.style.display = 'none';
		}
	}

	hideTabContent();
	filterTabContent();

	tabHeadersParent.addEventListener('click', (e) => {
		let className = '';
		if (e.target && e.target.nodeName === 'LI') {
			tabHeaders.forEach((item, i) => {
				if (e.target == item) {
					switch(e.target.className) {
						case 'all':
							className = 'all';
							break;
						case 'lovers':
							className = 'lovers';
							break;
						case 'chef':
							className = 'chef';
							break;
						case 'girl':
							className = 'girl';
							break;
						case 'guy':
							className = 'guy';
							break;
						case 'grandmother':
							className = 'grandmother';
							break;
						case 'granddad':
							className = 'granddad';
							break;
					}
					hideTabContent();
					filterTabContent(className);
				}
			});
		}
	});
}

export default filter;