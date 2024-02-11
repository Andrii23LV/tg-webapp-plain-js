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

	import toast, { Toaster } from 'svelte-french-toast';
	import { channelsStore } from '$lib/stores.js';
	import { userStore } from '$lib/stores';
	import { locationGroupsStore } from '$lib/stores.js';

	import {
		handPosting,
		toggleAutoposting,
		addChannel,
		getLocationByLocationGroup,
		getChannelsFilteredBy,
		getChannels,
		getBots,
		deleteChannel,
		getAllLocationGroups
	} from '$lib/API';

	import Toolbar from '$lib/components/toolbar/toolbar.svelte';
	import CardList from '$lib/components/card-list/card-list.svelte';
	import PageTitle from '$lib/shared/page-title.svelte';
	import ModalAddChannel from '$lib/components/modal-add-channel/modal-add-channel.svelte';
	import SwitchListType from '$lib/components/switch-list-type.svelte';
	import FilterList from '$lib/components/filter-list.svelte';
	import ResetIcon from '$lib/shared/assets/reset.svelte';

	$: channelListLength = $channelsStore.length;

	let selectedInterval = null;
	let selectedList = [];

	let listType = false;

	let allLocations = [];
	let userBots = [];

	let filterText = '';
	let filterType = '';

	let currentLocation = {
		parsing_domain: '',
		region: '',
		city: '',
		location_id: 0
	};

	let newChannel = {
		chat_id: 0,
		title: '',
		username: '',
		subject: '',
		bot_id: ''
	};

	const channelInputlist = [
		{ key: 'chat_id', label: 'ID чату', value: 0 },
		{ key: 'title', label: 'Назва каналу', value: '' },
		{ key: 'username', label: 'Username каналу (@)', value: '' },
		{ key: 'subject', label: 'Тема каналу', value: '' }
	];

	const changeFilterText = (text) => {
		filterText = text;
	};
	const changeFilterType = (type) => {
		filterType = type;
	};

	const changeListType = () => {
		listType = !listType ? 'unarchived' : false;
	};

	const updateInputListLocation = (value, type) => {
		currentLocation = {
			...currentLocation,
			[type]: value
		};

		if (type === 'parsing_domain' && value) fetchLocations();
		if (type === 'location_id' && value) fetchBots();
	};

	const selectInterval = (type) => (selectedInterval = type);

	const fetchLocations = async () => {
		try {
			const response = await getLocationByLocationGroup(currentLocation.parsing_domain);
			if (response.success) {
				allLocations = response.message.locations;
			} else {
				toast.error('Помилка отримання локацій');
			}
		} catch (error) {
			toast.error('Помилка отримання локацій');
		}
	};

	const fetchBots = async () => {
		try {
			const response = await getBots();
			if (response.success) {
				userBots = response.message;
			} else {
				toast.error('Помилка отримання ботів');
			}
		} catch (error) {
			toast.error('Помилка отримання ботів');
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

	const handleSelectCard = (itemId, isSelected) => {
		const newChannel = $channelsStore.find((item) => item.id == itemId);

		if (!newChannel.bot) return;

		selectedList = isSelected
			? [...selectedList, itemId]
			: selectedList.filter((id) => id !== itemId);
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

	const updateNewChannelBot = (bot_id) => {
		newChannel.bot_id = bot_id;
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
				autopost_interval: selectedInterval
			});
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

	const handleChannelAutoPostOn = async (idOrIdList, newAutoState) => {
		try {
			const response = await toggleAutoposting(idOrIdList, newAutoState, {
				interval: selectedInterval
			});
			if (response.success) {
				updateListAutoState(idOrIdList, newAutoState);
				toast.success(`Автопостинг з інтервалом (${modalState.selectedInterval} хв) додано!`);
			} else {
				toast.error('Перевірте вхідні дані автопостингу');
			}
		} catch (error) {
			toast.error(`Виникла помилка під час додавання автопостингу`);
			console.error('Error:', error);
		} finally {
			selectedInterval = null;
		}
	};

	const handleAddNewChannel = async () => {
		const obj = {
			chat_id: parseInt(newChannel.chat_id),
			title: newChannel.title,
			username: newChannel.username,
			subject: newChannel.subject,
			moderator_id: $userStore.id,
			location_id: parseInt(currentLocation.location_id),
			bot_id: parseInt(newChannel.bot_id)
		};

		try {
			const response = await addChannel(obj);
			if (response.success) {
				channelsStore.addChannel(response.message);

				newChannel = {
					chat_id: 0,
					title: '',
					username: '',
					subject: '',
					bot_id: ''
				};

				currentLocation = {
					parsing_domain: '',
					region: '',
					city: '',
					location_id: 0
				};

				toast.success('Новий канал додано!');
			} else {
				toast.error('Перевірте вхідні дані каналу');
			}
		} catch (error) {
			toast.error('Виникла помилка під час додавання каналу');
			console.error('Error:', error);
		}
	};

	const handleHandPost = (id, formData) => {
		if (id && formData.contacts?.length && formData.text && formData.image) {
			try {
				const formData = new FormData();
				formData.append('text', formData.text);
				formData.append('contacts', JSON.stringify(formData.contacts));
				if (formData.image) {
					formData.append('img', formData.image);
				}
				fetch(`https://parserdev.duckdns.org/dataserver/autoposting/sendPost/${id}`, {
					method: 'POST',
					body: formData
				})
					.then((response) => {
						if (!response.ok) {
							if (response.status === 413)
								throw new Error('Оберіть фото меншного розміру (до 1 мб)');
							throw new Error('Перевірте вхідні дані поста');
						}
						return response.json();
					})
					.then(() => {
						toast.success('Пост додано!');
					})
					.catch((error) => {
						toast.error(error.message || 'Помилка при виконанні запиту');
					});
			} catch (error) {
				toast.error('Виникла помилка під час додавання посту');
				console.error('Error:', error);
			}
		}
	};

	onMount(async () => {
		if (!$channelsStore.length) {
			await fetchAllChannels();
			// channelsStore.setChannels(channels);
		}

		if (!$locationGroupsStore.length) {
			const response = await getAllLocationGroups();

			if (response.success) {
				const location_groups = response.message;
				// @ts-ignore
				locationGroupsStore.setLocationGroups(location_groups);
			} else if (!response.success) {
				locationGroupsStore.setLocationGroups([]);
			}
		}
	});
</script>

<Toaster />
<div class="relative flex flex-col items-center justify-center gap-2">
	<Toolbar {selectedList} toggleChannelsAutoPost={handleChannelAutoPostOn} type={'main'} />
	<div class="flex flex-row gap-2">
		<PageTitle title="Всі канали" />
	</div>
	{#if channelListLength}
		<div class="flex flex-row gap-2">
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
			<SwitchListType type={listType} {changeListType} />
		</div>
		<CardList
			selectChannel={handleSelectCard}
			deleteChannel={handleDeleteChannel}
			toggleChannelAutoPost={handleChannelAutoPostOn}
			onHandPost={handleHandPost}
			list={$channelsStore}
			{selectedList}
			{selectedInterval}
			onSelectInterval={selectInterval}
			type={listType}
		/>
	{/if}
	<ModalAddChannel
		locationGroupList={$locationGroupsStore}
		{currentLocation}
		{allLocations}
		{userBots}
		{updateInputListLocation}
		{updateNewChannelBot}
		{newChannel}
		{channelInputlist}
		{handleAddNewChannel}
	/>
</div>
