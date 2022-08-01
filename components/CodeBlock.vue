<template>
	<div class="relative code-block-wrapper">
		<div class="syntax-highlighted" v-html="syntaxHighlighted"></div>
		<div class="copyButton">
			<Listbox as="div" v-model="copyOption">
				<ListboxLabel class="sr-only">Change copy option</ListboxLabel>
				<div class="relative">
					<div class="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
						<div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
							<div
								class="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white cursor-pointer clipboard-trigger"
								data-clipboard-target="code.torchlight"
							>
								<Component
									:is="copied ? ClipboardCheckIcon : ClipboardIcon"
									class="h-5 w-5" aria-hidden="true"
								></Component>
								<p class="ml-2.5 text-sm font-medium">{{ copyOptions[copyOption].title }}</p>
							</div>
							<ListboxButton class="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
								<span class="sr-only">Change copy option</span>
								<ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
							</ListboxButton>
						</div>
					</div>

					<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
						<ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
							<ListboxOption
								as="template"
								v-for="(option, key) in copyOptions"
								:key="option.title"
								:value="key"
								v-slot="{ active, selected }"
							>
								<li :class="[active ? 'text-white bg-indigo-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
									<div class="flex flex-col">
										<div class="flex justify-between">
											<p :class="selected ? 'font-semibold' : 'font-normal'">
												{{ option.title }}
											</p>
											<span v-if="selected" :class="active ? 'text-white' : 'text-indigo-500'">
												<CheckIcon class="h-5 w-5" aria-hidden="true" />
											</span>
										</div>
										<p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'mt-2']">
											{{ option.description }}
										</p>
									</div>
								</li>
							</ListboxOption>
						</ListboxOptions>
					</transition>
				</div>
			</Listbox>
		</div>
	</div>
</template>

<script setup>
import ClipboardJS from "clipboard/dist/clipboard";
import copyVisual from '../assets/js/visualClipboard';

import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/vue';

import {
	CheckIcon,
	ChevronDownIcon,
	ClipboardCheckIcon,
	ClipboardIcon,
} from '@heroicons/vue/solid';

const props = defineProps({
	syntaxHighlighted: String,
	styles: {
		type: String,
		default: 'background-color: #24292e; --theme-selection-background: #39414a;'
	},
	copyOption: {
		type: String,
		default: 'code'
	},
});

watch(() => props.copyOption, (newValue, oldValue) => {
	const clipboardTarget = document.querySelector('[data-clipboard-target="code.torchlight"]');
	clipboardTarget.click();

	localStorage.syntaxHighlightingCopyOption = newValue;
});

const copied = ref(false);
const copyOptions = {
	code: { title: 'Code', description: 'Copy the code. Useful to paste right into your code.' },
	html: { title: 'HTML', description: 'Copy the HTML. Useful to paste in any editor.' },
	visual: { title: 'Visual', description: 'Copy the code with styles. Useful to paste into Google Docs or Gmail.' },
};

const clipboard = new ClipboardJS('.clipboard-trigger', {
	text: (trigger) => {
		const copySelector = trigger.dataset.clipboardTarget;
		const codeBlock = document.querySelector(copySelector);

		return props.copyOption === 'html'
			? codeBlock.closest('.syntax-highlighted').innerHTML
			: codeBlock;
	},
}).on('success', (element) => {
	copied.value = true;
	element.clearSelection();

	if (props.copyOption === 'visual') {
		const codeBlock = document.querySelector('.syntax-highlighted').innerHTML;
		copyVisual(codeBlock.trim(), props.styles);
	}

	setTimeout(() => copied.value = false, 1500);
});

onUnmounted(() => {
	clipboard.destroy();
});
</script>
