<script>
	// @ts-nocheck
	// @ts-ignore

	import { JSONEditor } from 'svelte-jsoneditor';

	export let handleJson;
	export let json;

	let content = {
		text: undefined,
		json
	};

	$: handleJson(content.json);
</script>

<div class="flex h-[400px] flex-col items-center justify-center gap-2">
	<JSONEditor bind:content />
</div>
