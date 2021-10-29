function filter(tabHeadersParentSelector, tabHeadersSelector, tabsContentSelector, noPortfolioSelector) {
	const tabHeadersParent = document.querySelector(tabHeadersParentSelector),
		  tabHeaders = tabHeadersParent.querySelectorAll(tabHeadersSelector),
		  tabsContent = document.querySelectorAll(tabsContentSelector),
		  noPortfolio = document.querySelector(noPortfolioSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabHeaders.forEach(item => {
			item.classList.remove('active');
		});
	}
	function filterTabContent(classToFilter) {
		let isClassPresented;

		hideTabContent();

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
			noPortfolio.style.display = 'block';
		} else {
			noPortfolio.style.display = 'none';
		}
	}

	tabHeadersParent.addEventListener('click', (e) => {
		if (e.target && e.target.nodeName === 'LI') {
			tabHeaders.forEach((item, i) => {
				if (e.target == item) {
					let className = e.target.className;
					filterTabContent(className);
				}
			});
		}
	});
}

export default filter;