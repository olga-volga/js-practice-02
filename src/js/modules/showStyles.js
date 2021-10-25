import {getResource} from '../services/requests';
import showError from './showError';

function showStyles(triggerSelector, wrapperSelector) {
	const trigger = document.querySelector(triggerSelector);

	function createCards(response) {
		response.forEach(item => {
			const elem = document.createElement('div');
			elem.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

			elem.innerHTML = `
				<div class=styles-block>
					<img src=${item.src} alt>
					<h4>${item.title}</h4>
					<a href="${item.link}">Подробнее</a>
				</div>
			`;

			document.querySelector(wrapperSelector).append(elem);
		});
	}

	/*function showError() {
		let errorMessage = document.createElement('div');
		errorMessage.classList.add('error');
		errorMessage.style.cssText = 'text-align:center;padding:30px;';
		errorMessage.textContent = 'Что-то пошло не так... Попробуйте позже';
		document.querySelector(wrapperSelector).append(errorMessage);
	}*/

	trigger.addEventListener('click', (e) => {
		getResource('http://localhost:3000/styles')
			.then(data => createCards(data))
			.catch(() => showError(wrapperSelector));

		if (e.target) {
			e.target.remove();
		}
	});

	/**** Upload style cards by changing css-classes (simple way)

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

	***/

	/**** Upload style cards by creating ES6 Classes

	class StyleCard {
		constructor(src, title, link, parent, ...classes) {
			this.src = src;
			this.title = title;
			this.link = link;
			this.parent = document.querySelector(parent);
			this.classes = classes;
		}
		render() {
			const elem = document.createElement('div');
			if (this.classes.length === 0) {
				this.defaultClass = 'col-sm-3';
				elem.classList.add(this.defaultClass);
			} else {
				this.classes.forEach(item => elem.classList.add(item));
			}

			elem.innerHTML = `
				<div class=styles-block>
					<img src=${this.src} alt>
					<h4>${this.title}</h4>
					<a href="${this.link}">Подробнее</a>
				</div>
			`;

			this.parent.append(elem);
		}
	}

	trigger.addEventListener('click', (e) => {
		if (e.target) {
			e.target.style.display = 'none';
		}
		getResource('http://localhost:3000/styles')
			//.then(res => console.log(res));
			.then(data => {
				data.forEach(({src, title, link}) => {
					new StyleCard(src, title, link, '.styles .container .row').render();
				});
			});
		
	});

	***/

	
}

export default showStyles;