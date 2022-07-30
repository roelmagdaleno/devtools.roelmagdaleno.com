<template>
	<button
		:type="type"
		class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		:class="[
			buttonActions[action],
			loading ? 'cursor-not-allowed disabled:opacity-75' : ''
		]"
		:disabled="loading"
	>
		<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
		<slot />
	</button>
</template>

<script setup>
defineProps({
	action: String,
	loading: Boolean,
	type: String,
});

const buttonActions = {
	primary: 'shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
	secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
};
</script>
