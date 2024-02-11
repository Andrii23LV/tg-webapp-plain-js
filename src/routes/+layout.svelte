<script>
	// @ts-ignore
	import { onMount } from 'svelte';
	import { ModeWatcher, setMode } from 'mode-watcher';

	import '../app.pcss';

	onMount(() => {
		setMode('dark');
	});
</script>

<div class="h-screen w-full overflow-auto">
	<ModeWatcher />

	<slot />
</div>
