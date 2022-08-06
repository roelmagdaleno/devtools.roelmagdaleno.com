<template>
	<div>
		<p class="text-gray-500">
			Unserialize is a PHP function that takes a serialized data and convert it to a readable data, like JSON or an Array.
		</p>

		<form method="POST" @submit.prevent="unserialize" class="mt-8">
			<div>
				<label
					for="serialized-input"
					class="block text-sm font-medium text-gray-700"
				>
					Serialized Input
				</label>

				<div class="mt-1">
					<textarea
						rows="10"
						name="serialized-input"
						id="serialized-input"
						v-model.trim="serializedInput"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md textarea-code"
						required
					/>
				</div>
			</div>
			<div class="mt-4 md:flex items-center justify-between">
				<div class="md:mr-8">
					<Button type="submit" action="primary" :loading="loading">Unserialize</Button>
				</div>
				<div class="mt-4 md:mt-0 md:flex items-center">
					<label class="text-base font-medium text-gray-900 mr-4">Output:</label>
					<fieldset class="mt-4 md:mt-0">
						<legend class="sr-only">Output method</legend>
						<div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5">
							<div
								v-for="outputMethod in outputMethods"
								:key="outputMethod.id"
								class="flex items-center"
							>
								<label :for="outputMethod.id" class="flex items-center text-sm font-medium text-gray-700">
									<input :id="outputMethod.id" name="output-method" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mr-2" v-model="selectedOutputMethod" :value="outputMethod.id" />
									<span>{{ outputMethod.title }}</span>
								</label>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</form>
		<div class="mt-8" v-if="showOutput">
			<h2 class="text-xl font-medium">Output</h2>
			<CodeBlock :syntaxHighlighted="syntaxHighlighted" />
		</div>

		<Alert
			alert="error"
			:message="errorMessage"
			class="mt-4"
			v-if="errorMessage"
		/>
	</div>
</template>

<script setup>
import { disableElements } from "../assets/js/disableElements";

useHead({
	title: 'Unserialize',
	meta: [
		{ name: 'description', content: 'Unserialize is a PHP function that takes a serialized data and convert it to a readable data, like JSON or an Array.'},
		{ name: 'keywords', content: 'Unserialize, PHP, JSON, Array' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:title', content: 'Unserialize - DevTools by Roel Magdaleno' },
		{ property: 'og:image', content: 'https://devtools.roelmagdaleno.com/img/unserialize.png' },
		{ property: 'og:url', content: 'https://devtools.roelmagdaleno.com/unserialize/' },
		{ property: 'og:description', content: 'Unserialize is a PHP function that takes a serialized data and convert it to a readable data, like JSON or an Array.' },
		{ property: 'twitter:title', content: 'Unserialize - DevTools by Roel Magdaleno' },
		{ property: 'twitter:description', content: 'Unserialize is a PHP function that takes a serialized data and convert it to a readable data, like JSON or an Array.' },
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:image', content: 'https://devtools.roelmagdaleno.com/img/unserialize.png' },
		{ property: 'twitter:site', content: '@roelmagdaleno' },
		{ property: 'twitter:creator', content: '@roelmagdaleno' },
		{ property: 'twitter:url', content: 'https://devtools.roelmagdaleno.com/unserialize/' },
	],
});

const runtimeConfig = useRuntimeConfig();
const serializedInput = ref('a:10:{s:4:"name";s:6:"Chrome";s:7:"version";s:9:"103.0.0.0";s:8:"platform";s:7:"Windows";s:10:"update_url";s:29:"https://www.google.com/chrome";s:7:"img_src";s:43:"http://s.w.org/images/browsers/chrome.png?1";s:11:"img_src_ssl";s:44:"https://s.w.org/images/browsers/chrome.png?1";s:15:"current_version";s:2:"18";s:7:"upgrade";b:0;s:8:"insecure";b:0;s:6:"mobile";b:0;}');
const selectedOutputMethod = ref('json');
const loading = ref(false);
const showOutput = ref(false);
const errorMessage = ref(false);
const syntaxHighlighted = ref('');
const outputMethods = [
	{ id: 'json', title: 'JSON' },
	{ id: 'array', title: 'Array' },
];

async function unserialize() {
	try {
		errorMessage.value = false;
		loading.value = true;

		toggleElements();

		const route = `${ runtimeConfig.public.apiBase }/wp-json/wp-devtools/v1/unserialize`;
		const options = {
			method: 'POST',
			body: {
				serializedInput: serializedInput.value,
				outputMethod: selectedOutputMethod.value,
			},
			parseResponse: JSON.parse,
		};

		const response = await $fetch(route, options);

		showOutput.value = true;
		syntaxHighlighted.value = response.syntax_highlighted;

		loading.value = false;
		toggleElements();
	} catch (e) {
		errorMessage.value = e.data.message;
		loading.value = false;
		toggleElements();
	}
}

function toggleElements() {
	const formElements = [
		document.querySelector('#serialized-input'),
		...document.querySelectorAll('input[name="output-method"]'),
	];

	disableElements(formElements, loading.value);
}
</script>
