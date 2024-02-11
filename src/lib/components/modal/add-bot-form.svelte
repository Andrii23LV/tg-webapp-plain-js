<script>
	import { JSONEditor } from 'svelte-jsoneditor';

	export let handleLocation;

	let content = {
		text: undefined,
		json: {
			bot: {
				username: '',
				token: ''
			}
		}
	};

	$: handleLocation(content.json);
</script>

<div class="flex h-[400px] flex-col items-center justify-center gap-2">
	<JSONEditor bind:content />
</div>
