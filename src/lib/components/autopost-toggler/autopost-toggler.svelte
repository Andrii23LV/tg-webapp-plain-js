<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/shared/button.svelte';

	let dialogOpen = false;

	export let checked;
	export let onToggle;
	export let onSelectInterval;
	export let selectedInterval;
</script>

<div class="list-center flex flex-row justify-center gap-2 text-xs">
	<input
		type="checkbox"
		bind:checked
		on:click|preventDefault={() => {
			if (!checked) {
				dialogOpen = true;
			} else {
				onToggle();
			}
		}}
		class="accent-zinc-50"
	/>
	<div class="space-y-1 leading-none">
		<p>Авто-постінг</p>
	</div>
</div>
<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger />
	<Dialog.Content class="flex flex-col items-center gap-6 sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Оберіть інтервал для постингу (хв)</Dialog.Title>
		</Dialog.Header>
		<div class="flex flex-row gap-4">
			<Button
				handler={() => onSelectInterval('30')}
				title="30"
				style={selectedInterval === '30' ? 'submit-active' : 'submit'}
				disabled={false}
				type="button"
			/>
			<Button
				handler={() => onSelectInterval('60')}
				title="60"
				style={selectedInterval === '60' ? 'submit-active' : 'submit'}
				disabled={false}
				type="button"
			/>
		</div>
		<Dialog.Footer class="m-auto mt-2 flex">
			<Button
				type="submit"
				style="submit"
				disabled={!selectedInterval}
				handler={() => selectedInterval && onToggle()}>Додати авто-постинг</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
