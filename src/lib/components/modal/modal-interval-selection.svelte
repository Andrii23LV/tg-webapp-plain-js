<script>
	import Button from '../../shared/button.svelte';

	export let selectedInterval;
	export let handleSelectIntervalClick;
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<h2 class="text-zinc-500">Оберіть інтервал для постингу (хв)</h2>
	<div class="flex flex-row justify-center gap-4">
		<Button
			handler={() => handleSelectIntervalClick('30')}
			title="30"
			style={selectedInterval === '30' ? 'submit-active' : 'submit'}
			disabled={false}
			type="button"
		/>
		<Button
			handler={() => handleSelectIntervalClick('60')}
			title="60"
			style={selectedInterval === '60' ? 'submit-active' : 'submit'}
			disabled={false}
			type="button"
		/>
	</div>
</div>
