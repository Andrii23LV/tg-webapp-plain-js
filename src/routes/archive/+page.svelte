<script>
	const channels = [
		{
			id: 1,
			chat_id: 155468,
			title: 'srhjkgherifugh',
			username: 'fsdjiuhweriruygher',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 3,
				username: 'BotNew'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 9,
			chat_id: 34534634,
			title: 'wfefwegwgwrgw',
			username: 'qweqwqeweqdfsdfccdfg',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 10,
			chat_id: 34735753462,
			title: 'cvvcbbfbfbfdvs',
			username: 'wegfgwegwrgrryeueurg',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 11,
			chat_id: 346346366,
			title: 'QWWREQWER',
			username: 'vbvbvbvbvbfghefef',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 12,
			chat_id: 23234235213523,
			title: 'QWEERTWEFCC',
			username: 'ddffffddtrhhhhhh',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 13,
			chat_id: 234235346,
			title: 'йййцуйцкйцук',
			username: 'dfsgfhdfghfghbdbtbbtbt',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 14,
			chat_id: 1111111122222,
			title: 'QQQQQQQQ',
			username: 'WWWWERRTTRTTTT',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 14,
				username: 'dfnkghsdijhgfheruig'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 20,
			chat_id: 2107243128,
			title: 'тест 1',
			username: 'fgjfgjfgjfgjgfhgfhghgf',
			subject: 'work',
			archived: false,
			autopost: false,
			autopost_interval: null,
			bot: {
				id: 16,
				username: 'dasfaasfasbot'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 22,
			chat_id: 1911721749,
			title: 'PYTHON DEV',
			username: 'aidevefisgifserhdfghjngdfikjoh',
			subject: 'work',
			archived: false,
			autopost: true,
			autopost_interval: 30,
			bot: {
				id: 19,
				username: 'UA_WebUnity_chatgptbot'
			},
			location: {
				id: 6,
				city: 'Львів',
				region: 'Львівська область',
				parsing_id: 44,
				location_group_id: 1
			}
		},
		{
			id: 23,
			chat_id: 2007403416,
			title: 'test 8',
			username: 'qwewqeqwsadsadasfasf',
			subject: 'work',
			archived: false,
			autopost: true,
			autopost_interval: 30,
			bot: {
				id: 16,
				username: 'dasfaasfasbot'
			},
			location: {
				id: 4,
				city: 'Москва',
				region: 'Московская область',
				parsing_id: 7,
				location_group_id: 2
			}
		}
	];

	import { onMount } from 'svelte';
	import { channelsStore } from '$lib/stores.js';
	import { userStore } from '$lib/stores';

	import { toggleAutoposting, getChannels, getChannelsFilteredBy, deleteChannel } from '$lib/API';

	import Toolbar from '$lib/components/toolbar/toolbar.svelte';
	import CardList from '$lib/components/card-list/card-list.svelte';
	import ErrorContainer from '$lib/shared/error-container.svelte';
	import PageTitle from '$lib/shared/page-title.svelte';
	import FilterList from '../../lib/components/filter-list.svelte';
	import ResetIcon from '$lib/shared/assets/reset.svelte';

	import toast, { Toaster } from 'svelte-french-toast';

	$: archivedLength = $channelsStore.filter((channel) => channel['autopost']).length;

	let selectedList = [];

	let filterText = '';
	let filterType = '';

	function changeFilterText(text) {
		filterText = text;
	}
	function changeFilterType(type) {
		filterType = type;
	}

	const handleSelectCard = (itemId, isSelected) => {
		const newChannel = $channelsStore.find((item) => item.id == itemId);

		if (!newChannel.bot) return;

		selectedList = isSelected
			? [...selectedList, itemId]
			: selectedList.filter((id) => id !== itemId);
	};

	const updateListAutoState = (idOrIdList, autopost) => {
		selectedList = [];

		const idList = Array.isArray(idOrIdList) ? idOrIdList : [idOrIdList];
		for (const id of idList) {
			const channel = $channelsStore.find((item) => item.id === id);
			channelsStore.updateOneOf({
				...channel,
				autopost,
				archived: true,
				autopost_interval: null
			});
		}
	};

	const handleGetChannelsFilteredBy = async () => {
		try {
			const obj = { user_id: $userStore.id, filter_key: filterType, filter_value: filterText };
			const response = await getChannelsFilteredBy(obj);

			if (response.success) {
				if (response.message && response.message?.length) {
					channelsStore.setChannels(response.message);
				} else if (response.message && !response.message?.length) {
					toast.error(`За значенням "${filterText}" - немає результатів`);
				}
			} else {
				toast.error(`За значенням "${filterText}" - немає результатів`);
			}
		} catch (error) {
			toast.error(`Виникла помилка під час фільтрування каналів`);
			console.error('Error:', error);
		} finally {
			filterText = '';
			filterType = null;
		}
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

	const handleChannelAutoPostOff = async (idOrIdList, newAutoState) => {
		try {
			const response = await toggleAutoposting(idOrIdList, newAutoState, {
				interval: null
			});
			if (response.success) {
				updateListAutoState(idOrIdList, newAutoState);
				toast.success(`Автоматичний постинг вимкнено!`);
			} else {
				toast.error('Виникла помилка під час вимкнення автопостингу');
			}
		} catch (error) {
			toast.error(`Виникла помилка під час вимкнення автопостингу`);
			console.error('Error:', error);
		}
	};

	const fetchAllChannels = async () => {
		const response = await getChannels();
		if (response.success) {
			const channels = response.message;
			channelsStore.setChannels(channels);
		} else if (!response.success) {
			channelsStore.setChannels([]);
		}
	};

	onMount(async () => {
		if (!$channelsStore.length) {
			await fetchAllChannels();
			// channelsStore.setChannels(channels);
		}
	});
</script>

<Toaster />
<div class="list-center flex flex-col justify-center gap-2">
	<Toolbar {selectedList} toggleChannelsAutoPost={handleChannelAutoPostOff} type={'archived'} />
	{#if archivedLength}
		<PageTitle title="Архівовані канали (з авто-постингом)" />
		<div class="flex items-center justify-center gap-2">
			<button
				on:click={fetchAllChannels}
				class={`cursor-pointer rounded-lg border border-zinc-500 bg-zinc-600 p-1 hover:bg-zinc-500 ${!filterText && !filterType ? 'opacity-50' : ''}`}
				disabled={!filterText && !filterType}
			>
				<ResetIcon />
			</button>
			<FilterList
				onFilterList={handleGetChannelsFilteredBy}
				{filterText}
				{filterType}
				{changeFilterText}
				{changeFilterType}
			/>
		</div>
		<CardList
			selectChannel={handleSelectCard}
			deleteChannel={handleDeleteChannel}
			toggleChannelAutoPost={handleChannelAutoPostOff}
			list={$channelsStore}
			{selectedList}
			type={'archived'}
		/>
	{:else}
		<ErrorContainer message="Немає каналів з автопостингом" />
	{/if}
</div>
