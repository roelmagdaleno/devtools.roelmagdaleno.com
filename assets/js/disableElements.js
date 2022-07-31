export function disableElements(formElements, loading) {
	if (formElements.length === 0) {
		return;
	}

	let attrFun = loading.value ? 'setAttribute' : 'removeAttribute';
	let classFun = loading.value ? 'add' : 'remove';

	formElements.map((element) => {
		element[attrFun]('disabled', 'disabled');
		element.classList[classFun]('disabled:opacity-75', 'cursor-not-allowed');
	});
}
