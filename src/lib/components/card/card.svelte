<script>
	import * as Card from '$lib/components/ui/card';

	import { onMount } from 'svelte';
	import CardSelectCheckbox from './card-select-checkbox.svelte';
	import CardAutoPostCheckbox from './card-auto-post-checkbox.svelte';
	import CardInfo from './card-info.svelte';
	import Button from '$lib/shared/button.svelte';
	import Bucket from '$lib/shared/assets/bucket.svelte';
	import Envelope from '$lib/shared/assets/envelope.svelte';
	import AlertDialog from '$lib/shared/alert-dialog.svelte';
	import CardModalDetailedInfo from './card-modal-detailed-info.svelte';
	import CardModalHandpost from './card-modal-handpost.svelte';

	export let item;
	export let selectedList = [];
	export let onSelect;
	export let onDelete;
	export let onToggleAuto;
	export let onHandPost;
	let isSelected = selectedList.includes(item.id);

	let newChannelState = {
		type: null,
		idOrIdList: null,
		selectedInterval: null,
		formData: { text: '', image: null, contacts: [] }
	};

	const handleCheckboxChange = () => {
		isSelected = !isSelected;
		onSelect(item.id, isSelected);
	};

	const handleAutoToggle = () => {
		onToggleAuto(item.id, !item.autopost);
	};

	const updateChannelState = (update) => {
		newChannelState = { ...newChannelState, ...update };
	};

	const onFormDataChange = (formData) => updateChannelState({ formData });

	onMount(() => {
		isSelected = selectedList.includes(item.id);
	});
</script>

<Card.Root class="channelCard flex flex-row">
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
				<CardAutoPostCheckbox checked={item.autopost} onToggle={handleAutoToggle} />
			{/if}
			<div class="flex flex-row justify-center gap-2">
				<CardModalHandpost channel={item} {onHandPost} {onFormDataChange} />
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
