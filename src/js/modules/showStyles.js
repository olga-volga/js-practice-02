import {getResource} from '../services/requests';

function showStyles(triggerSelector, stylesSelector) {
	const trigger = document.querySelector(triggerSelector),
		  styles = document.querySelectorAll(stylesSelector);

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

	class StyleCard {
		constructor(src, title, link) {
			this.src = src;
			this.title = title;
			this.link = link;
		}
		render() {
			const elem = document.createElement('div');
			if (this.classes.length === 0) {
				this.defaultClass = 'styles-block';
				elem.classList.add(this.defaultClass);
			} else {
				this.classes.forEach(item => elem.classList.add(item));
			}

			elem.innerHTML = `
				<img src=${this.src} alt>
				<h4>${this.title}</h4>
				<a href="${this.link}">Подробнее</a>
			`;

			this.parent.append(elem);
		}
	}

	trigger.addEventListener('click', (e) => {
		if (e.target) {
			e.target.style.display = 'none';
		}
		getResource('http://localhost:3000/styles')
			.then(data => {
				data.forEach(({src, title, link}) => {
					new StyleCard(src, title, link).render();
					console.log(111);
				});
			});
	});

	
}

export default showStyles;