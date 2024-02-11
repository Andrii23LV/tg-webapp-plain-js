<script>
	export let checked;
	export let onToggle;

	const handleCheckboxChange = () => {
		onToggle();
	};
</script>

<div class="list-center flex flex-row justify-center gap-2 text-xs">
	<input
		type="checkbox"
		bind:checked
		on:click|preventDefault={handleCheckboxChange}
		class="accent-zinc-50"
	/>
	<div class="space-y-1 leading-none">
		<p>Авто-постінг</p>
	</div>
</div>
