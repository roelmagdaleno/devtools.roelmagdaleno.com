const copyVisual = (content, styles) => {
	content = `<table><tr><td style="${ styles } border-radius: 0.25rem; padding: 16px;">${ content }</td></tr></table>`;

	function listener(e) {
		e.clipboardData.setData('text/html', content);
		e.clipboardData.setData('text/plain', content);
		e.preventDefault();
	}

	document.addEventListener('copy', listener);
	document.execCommand('copy');
	document.removeEventListener('copy', listener);
};

export default copyVisual;
