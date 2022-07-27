<template>
	<div>
		<label class="block" for="serialized-input">
			<span class="text-gray-700">Serialized Input</span>
		</label>
		<textarea
			cols="30"
			rows="10"
			class="form-textarea"
			placeholder="Serialized Data"
			id="serialized-input"
			v-model="serializedInput"
		></textarea>
	</div>
</template>

<script setup>
const serializedInput = ref('a:2:{i:0;s:12:"Sample array";i:1;a:2:{i:0;s:5:"Apple";i:1;s:6:"Orange";}}');
</script>
