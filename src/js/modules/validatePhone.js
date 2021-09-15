function validatePhone(selector) {
	/*const phoneInputs = document.querySelectorAll('input[name="phone"]');

	phoneInputs.forEach(item => {
		console.log();
	});*/
	function setCursorPosition(position, elem) {
		elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
		}
	}

	function createMask(event) {
		let matrix = '+7(___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/ig, ''),
			val = this.value.replace(/\D/ig, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}
}

export default validatePhone;