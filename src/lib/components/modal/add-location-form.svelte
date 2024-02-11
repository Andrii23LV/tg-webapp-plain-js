<script>
	import { JSONEditor } from 'svelte-jsoneditor';

	export let handleLocation;

	let content = {
		text: undefined,
		json: {
			location: {
				city: '',
				region: '',
				country: '',
				parsing_id: 0,
				parsing_domain: '',
				subject: ''
			}
		}
	};

	$: handleLocation(content.json);
</script>

<div class="flex h-[400px] flex-col items-center justify-center gap-2">
	<JSONEditor bind:content />
</div>
