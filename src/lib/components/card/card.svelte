<script>
	import * as Card from '$lib/components/ui/card';

	import { onMount } from 'svelte';
	import CardSelectCheckbox from './card-select-checkbox.svelte';
	import CardInfo from './card-info.svelte';
	import Bucket from '$lib/shared/assets/bucket.svelte';
	import AlertDialog from '$lib/shared/alert-dialog.svelte';
	import CardModalDetailedInfo from './card-modal-detailed-info.svelte';
	import CardModalHandpost from './card-modal-handpost.svelte';
	import AutopostToggler from '../autopost-toggler/autopost-toggler.svelte';

	export let item;
	export let selectedList = [];
	export let onSelect;
	export let onDelete;
	export let onToggleAuto;
	export let onHandPost;
	export let onSelectInterval;
	export let selectedInterval;

	let isSelected = selectedList.includes(item.id);

	const handleCheckboxChange = () => {
		isSelected = !isSelected;
		onSelect(item.id, isSelected);
	};

	const handleAutoToggle = () => {
		onToggleAuto(item.id, !item.autopost);
	};

	onMount(() => {
		isSelected = selectedList.includes(item.id);
	});
</script>

<Card.Root
	class={`channelCard flex flex-row ${isSelected ? 'border-green-900 shadow-green-950' : null}`}
>
	<div class="flex w-full flex-row items-center justify-between gap-3 p-2">
		{#if item.bot}
			<CardSelectCheckbox {isSelected} {handleCheckboxChange} />
		{/if}
		<div class="flex flex-1 flex-col">
			<Card.Header class="flex flex-row items-center gap-2 p-2">
				<Card.Title class="mt-1">{item.title}</Card.Title>
				<CardModalDetailedInfo channel={item} />
			</Card.Header>
			<Card.Description>
				<CardInfo {item} />
			</Card.Description>
		</div>
		<Card.Content class="flex flex-col gap-4 p-0">
			{#if item.bot}
				<AutopostToggler
					checked={item.autopost}
					onToggle={handleAutoToggle}
					{onSelectInterval}
					{selectedInterval}
				/>
			{/if}
			<div class="flex flex-row justify-center gap-2">
				<CardModalHandpost channel={item} {onHandPost} />
				<AlertDialog
					title={'Видалити канал?'}
					message={`Підтверджуючи Ви видаляєте канал ${item.title}`}
					onSubmit={() => onDelete(item.id)}
				>
					<div class="delete">
						<Bucket />
					</div>
				</AlertDialog>
			</div>
		</Card.Content>
	</div>
</Card.Root>
