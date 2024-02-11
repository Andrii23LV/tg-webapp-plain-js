<script>
	import { onMount } from 'svelte';
	import { channelsStore } from '$lib/stores.js';

	import { toggleAutoposting, getChannels, deleteChannel } from '$lib/API';

	import Toolbar from '$lib/components/toolbar/toolbar.svelte';
	import CardList from '$lib/components/card-list/card-list.svelte';
	import ErrorContainer from '$lib/shared/error-container.svelte';
	import PageTitle from '$lib/shared/page-title.svelte';

	import toast, { Toaster } from 'svelte-french-toast';

	$: archivedLength = $channelsStore.filter((channel) => channel['autopost']).length;

	let selectedList;
	let inputText = '';

	const selectCard = (itemId, isSelected) => {
		selectedList = isSelected
			? [...selectedList, itemId]
			: selectedList.filter((id) => id !== itemId);
	};

	const updateListAutoState = async (
		idOrIdList,
		autopost
	) => {
		if (!idOrIdList) return;

		try {
			const response = await toggleAutoposting(idOrIdList, false, { interval: null });

			if (response.success) {
				selectedList = [];

				const idList = Array.isArray(idOrIdList) ? idOrIdList : [idOrIdList];
				for (const id of idList) {
					const channel = $channelsStore.find((item) => item.id === id);
					channelsStore.updateOneOf({
						...channel,
						autopost,
						archived: false,
						autopost_interval: null
					});

					toast.success(`Автоматичний постинг вимкнено!`);
				}
			} else {
				toast.error('Виникла помилка під час вимкнення автопостингу');
			}
		} catch (error) {
			toast.error(`Виникла помилка під час вимкнення автопостингу`);
			console.error('Error:', error);
		}
	};

	const handleToggleAutoPost = (itemId, autopost) => {
		updateListAutoState(itemId, autopost);
	};

	const handleToggleAutoPostList = (idList) => {
		updateListAutoState(idList, false);
	};

	const handleInputChange = (text) => {
		inputText = text;
	};

	const handleDeleteChannel = async (id) => {
		try {
			const response = await deleteChannel(id);
			if (response.success) {
				channelsStore.removeOne(id);

				toast.success('Канал видалено!');
			} else {
				toast.error('Виникла помилка під час видалення каналу');
			}
		} catch (error) {
			toast.error('Виникла помилка під час видалення каналу');
			console.error('Error:', error);
		}
	};

	onMount(async () => {
		if (!$channelsStore.length) {
			const response = await getChannels();

			if (response.success) {
				const channels = response.message;
				channelsStore.setChannels(channels);
			} else if (!response.success) {
				channelsStore.setChannels([]);
			}
		}
	});
</script>

<Toaster />
<div class="list-center flex flex-col justify-center gap-2">
	<Toolbar
		{selectedList}
		onAutoPostList={handleToggleAutoPostList}
		type={'archived'}
		{inputText}
		onInputChange={handleInputChange}
	/>
	{#if archivedLength}
		<PageTitle title="Архівовані канали (з авто-постингом)" />
		<CardList
			{selectCard}
			deleteCard={handleDeleteChannel}
			list={$channelsStore}
			{selectedList}
			{handleToggleAutoPost}
			{inputText}
			type="archived"
		/>
	{:else}
		<ErrorContainer message="Немає каналів з автопостингом" />
	{/if}
</div>
