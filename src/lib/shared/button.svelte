<script>
	export let title = null;
	export let handler;
	export let disabled;
	export let style;
	export let type;
</script>

<button {type} {disabled} class={`${style} ${disabled ? 'disabled' : ''}`} on:click={handler}>
	<slot />
	{#if title}
		<p>{title}</p>
	{/if}
</button>
