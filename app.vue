<template>
	<div>
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>

				<div class="fixed inset-0 flex z-40">
					<TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
						<DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-800">
							<TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
								<div class="absolute top-0 right-0 -mr-12 pt-2">
									<button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
										<span class="sr-only">Close sidebar</span>
										<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>
							<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<div class="flex-shrink-0 flex items-center px-4">
									<div>
										<span class="inline-block items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 font-bold">DevTools</span>
										<span class="block font-bold text-white text-xl">by Roel Magdaleno</span>
									</div>
								</div>
								<nav class="mt-5 px-2 space-y-1">
									<NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="['text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" @click="sidebarOpen = false">
										<component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
										{{ item.name }}
									</NuxtLink>
								</nav>
							</div>
						</DialogPanel>
					</TransitionChild>
					<div class="flex-shrink-0 w-14">
						<!-- Force sidebar to shrink to fit close icon -->
					</div>
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Static sidebar for desktop -->
		<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			<div class="flex-1 flex flex-col min-h-0 bg-indigo-700">
				<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
					<div class="px-4">
						<span class="inline-block items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 font-bold">DevTools</span>
						<span class="block font-bold text-white text-xl">by Roel Magdaleno</span>
					</div>
					<nav class="mt-5 flex-1 px-2 space-y-1">
						<NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="['text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
							<component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
							{{ item.name }}
						</NuxtLink>
					</nav>
				</div>
			</div>
		</div>
		<div class="md:pl-64 flex flex-col flex-1">
			<div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
				<button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
					<span class="sr-only">Open sidebar</span>
					<MenuIcon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<main class="flex-1">
				<div class="py-6">
					<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h1 class="text-2xl font-semibold text-gray-900">{{ h1Title }}</h1>
					</div>
					<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
						<div class="py-4">
							<NuxtPage />
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import {
	CodeIcon,
	DocumentTextIcon,
	HomeIcon,
	MenuIcon,
	XIcon,
} from '@heroicons/vue/outline';

const sidebarOpen = ref(false);
const h1Title = ref('Dashboard');
const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon },
	{ name: 'Unserialize', href: '/unserialize', icon: DocumentTextIcon },
	{ name: 'Syntax Highlighting', href: '/syntax-highlighting', icon: CodeIcon },
];

useHead({
	titleTemplate: (titleChunk) => {
		h1Title.value = titleChunk;

		const title = 'DevTools by Roel Magdaleno';
		return titleChunk ? `${titleChunk} - ${title}` : `${title}`;
	}
});
</script>

<style scoped>
.router-link-active {
	@apply bg-indigo-800 text-white;
}
</style>
