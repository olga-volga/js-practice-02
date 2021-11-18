import {postData} from '../services/requests';
import showError from './showError';

function drop() {
	const fileInputs = document.querySelectorAll('[name="upload"]');

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	function highlightElem(elem) {
		elem.closest('.file_upload').style.backgroundColor = 'rgba(178, 80, 188, 0.5)';
	}
	function unhighlightElem(elem) {
		elem.closest('.file_upload').style.backgroundColor = '';
	}

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		fileInputs.forEach(item => {
			item.addEventListener(eventName, preventDefaults, false);
		});
	});
	['dragenter', 'dragover'].forEach(eventName => {
		fileInputs.forEach(item => {
			item.addEventListener(eventName, () => highlightElem(item), false);
		});
	});
	['dragleave', 'drop'].forEach(eventName => {
		fileInputs.forEach(item => {
			item.addEventListener(eventName, () => unhighlightElem(item), false);
		});
	});
	fileInputs.forEach(item => {
		item.addEventListener('drop', (e) => {
			item.files = e.dataTransfer.files;

			let dots;
			const arrName = item.files[0].name.split('.');
			arrName[0].length > 5 ? dots = '...' : dots = '.';

			const imgName = arrName[0].slice(0, 5) + dots + arrName[1];

			item.previousElementSibling.textContent = imgName;

			if (item.closest('.main')) {
				let formData = new FormData();
				formData.append('file', item.files[0]);

				postData('assets/server.php', formData)
					.then(() => {
						data => console.log(data);
						showError('.main .file_upload', 'Отправлено!');
					})
					.catch(() => {
						showError('.main .file_upload', 'Произошла ошибка...');
					})
					.finally(() => {
						setTimeout(() => {
							item.previousElementSibling.textContent = 'Файл не выбран';
						}, 5000);
					});
			}
		});
	});
}

export default drop;