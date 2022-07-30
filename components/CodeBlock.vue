<template>
	<div class="relative code-block-wrapper">
		<div v-html="syntaxHighlighted"></div>
		<button
			type="button"
			class="md:block hidden copyButton"
			aria-label="Copy to Clipboard"
			title="Copy to Clipboard"
			data-clipboard-target="code.torchlight"
		>
			<svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
		</button>
	</div>
</template>

<script setup>
import ClipboardJS from "clipboard/dist/clipboard";

defineProps({
	syntaxHighlighted: String,
});

const clipboardIcon = `<svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>`;

const clipboardCopiedIcon = `<svg class="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`;

onMounted(() => {
	new ClipboardJS('.copyButton').on('success', (element) => {
		const clickedButton = element.trigger;

		clickedButton.innerHTML = clipboardCopiedIcon;
		element.clearSelection();

		setTimeout(() => {
			clickedButton.innerHTML = clipboardIcon;
		}, 1500);
	});
});
</script>
