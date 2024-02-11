<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import { addBot, getBots, deleteBot } from '$lib/API/index';

	import toast, { Toaster } from 'svelte-french-toast';
	import SheetInputs from '$lib/components/sheet-inputs/sheet-inputs.svelte';
	import Navbar from '$lib/shared/navbar.svelte';
	import PageTitle from '$lib/shared/page-title.svelte';
	import CardBotList from '$lib/components/card-bot-list/card-bot-list.svelte';

	import { botStore } from '$lib/stores.js';

	let newBot = {
		username: '',
		token: ''
	};

	const botInputlist = [
		{ key: 'username', label: 'Username бота', value: '' },
		{ key: 'token', label: 'Токен бота', value: '' }
	];

	const submitBotForm = async () => {
		if (newBot.username && newBot.token) {
			try {
				const response = await addBot(newBot);
				if (response.success) {
					botStore.addBot(response.message[0]);

					toast.success(`Нового бота додано!`);
				} else {
					toast.error('Перевірте вхідні дані нового бота');
				}
			} catch (error) {
				toast.error(`Виникла помилка під час додавання бота`);
				console.error('Error:', error);
			}
		}
	};

	const handleDeleteBot = async (id) => {
		try {
			const response = await deleteBot(id);

			if (response.success) {
				botStore.removeOne(id);

				toast.success('Бота видалено!');
			} else {
				toast.error('Виникла помилка під час видалення бота');
			}
		} catch (error) {
			toast.error('Виникла помилка під час видалення бота');
			console.error('Error:', error);
		}
	};

	onMount(async () => {
		if (!$botStore.length) {
			const response = await getBots();

			if (response.success) {
				const bots = response.message;

				botStore.setBots(bots);
			} else if (!response.success) {
				botStore.setBots([]);
			}
		}
	});
</script>

<Toaster />
<div class="flex w-full flex-col items-center justify-center gap-2">
	<Navbar type="bots" />
	<PageTitle title="Керування ботами" />
	<SheetInputs
		buttonText="+"
		title="Новий бот"
		description="Заповніть поля стосовно нового бота"
		inputList={botInputlist}
		originalData={newBot}
		onSubmit={submitBotForm}
	/>
	{#if $botStore.length}
		<CardBotList list={$botStore} deleteChannel={handleDeleteBot} />
	{/if}
</div>
