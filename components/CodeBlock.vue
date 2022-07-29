<template>
	<div class="relative code-block-wrapper">
		<div v-html="syntaxHighlighted"></div>
		<button
			type="button"
			class="md:block hidden copyButton"
			aria-label="Copy to Clipboard"
			title="Copy to Clipboard"
			data-clipboard-target=""
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>
		</button>
	</div>
</template>

<script setup>
import ClipboardJS from "clipboard";

defineProps({
	syntaxHighlighted: String,
});

new ClipboardJS('.copyButton', {
	text: function (trigger) {
		return 'cd example-app\\n \\nphp artisan serve'.replace(/\n/g, "\r\n");
	}
});
</script>

