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
				<div class="flex-shrink-0 flex border-t border-indigo-800 p-4 justify-center">
					<div class="flex items-center">
						<a href="https://github.com/roelmagdaleno" class="flex-shrink-0 w-full group block" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
						</a>
						<a href="https://twitter.com/roelmagdaleno" class="flex-shrink-0 w-full group block" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
						</a>
					</div>
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
