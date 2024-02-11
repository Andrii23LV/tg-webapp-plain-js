<!-- ToolbarInput.svelte -->
<script>
	import { onMount } from 'svelte';

	export let inputText;
	export let onInputChange;

	onMount(() => {
		const input = document.querySelector('.toolbar-input');
		input.focus();
	});
</script>

<input
	type="text"
	placeholder="Пошук каналів..."
	class="toolbar-input"
	bind:value={inputText}
	on:input={(e) => {
		if (e.target) {
			onInputChange(e.target.value);
		}
	}}
/>
