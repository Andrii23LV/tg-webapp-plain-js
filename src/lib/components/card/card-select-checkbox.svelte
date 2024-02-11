<script>
	export let isSelected;
	export let handleCheckboxChange;
</script>

<input
	type="checkbox"
	bind:checked={isSelected}
	on:change={handleCheckboxChange}
	class="accent-zinc-50"
/>
