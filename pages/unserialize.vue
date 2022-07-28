<template>
	<form method="POST" @submit.prevent="unserialize">
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
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					autofocus
				/>
			</div>
		</div>
		<div class="mt-4 flex items-center">
			<div class="mr-8">
				<button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Unserialize</button>
			</div>
			<div>
				<label class="text-base font-medium text-gray-900">Output</label>
				<fieldset>
					<legend class="sr-only">Output method</legend>
					<div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
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
</template>

<script setup>
useHead({ title: 'Unserialize' });

const serializedInput = ref('a:2:{i:0;s:12:"Sample array";i:1;a:2:{i:0;s:5:"Apple";i:1;s:6:"Orange";}}');
const selectedOutputMethod = ref('json');
const outputMethods = [
	{ id: 'json', title: 'JSON' },
	{ id: 'print_r', title: 'print_r' },
];

function unserialize() {
	console.log(serializedInput.value)
}
</script>
