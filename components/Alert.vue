<template>
	<div class="rounded-md p-4 border" :class="[cssClasses[alert].bg, cssClasses[alert].border]">
		<div class="flex">
			<div class="flex-shrink-0">
				<component
					:is="alerts[alert]"
					class="h-5 w-5"
					:class="cssClasses[alert].icon"
					aria-hidden="true"
				></component>
			</div>
			<div class="ml-3">
				<p class="text-sm font-medium" :class="cssClasses[alert].text">{{ message }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	CheckCircleIcon,
	XCircleIcon,
} from '@heroicons/vue/solid';

defineProps({
	alert: String,
	message: String,
});

const alerts = {
	error: XCircleIcon,
	success: CheckCircleIcon,
};

const cssClasses = {
	error: { bg: 'bg-red-50', icon: 'text-red-400', border: 'border-red-100', text: 'text-red-800' },
	success: { bg: 'bg-green-50', icon: 'text-green-400', border: 'border-green-100', text: 'text-green-800' },
};
</script>
