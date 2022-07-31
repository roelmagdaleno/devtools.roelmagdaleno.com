export function disableElements(formElements, loading) {
	if (formElements.length === 0) {
		return;
	}

	let attrFun = loading ? 'setAttribute' : 'removeAttribute';
	let classFun = loading ? 'add' : 'remove';

	formElements.map((element) => {
		element[attrFun]('disabled', 'disabled');
		element.classList[classFun]('disabled:opacity-75', 'cursor-not-allowed');
	});
}
