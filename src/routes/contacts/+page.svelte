<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { t } from '$lib/translations';

	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	const webApp = window?.Telegram?.WebApp;
	const idMatch = $page.url.searchParams.get('id');

	let contacts = [];
	let expandedContact = null;

	const translateDict = {
		phone: '📲 Телефон',
		email: '📩 ' + $t('menu.email'),
		link: '🔗 ' + $t('menu.link'),
		viber: '🔗 Viber',
		telegram: '🔗 Telegram',
		whatsapp: '🔗 WhatsApp'
	};

	const getData = async () => {
		try {
			const response = await fetch(`https://parserdev.duckdns.org/dataserver/contact/${idMatch}`);

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			contacts = await response.json();

			return contacts;
		} catch (error) {
			console.error('Ошибка при получении данных:', error);
		}
	};

	onMount(() => {
		getData();
	});

	const handleClick = (link) => {
		expandedContact = link;

		webApp.HapticFeedback.notificationOccurred('success');

		navigator.clipboard.writeText(link.replace('tel:', ''));
		toast.success($t('toast-success.notification'));
	};
</script>

<Toaster />
<div class="flex justify-center">
	<Card.Root class="mt-5 w-[350px]">
		<Card.Header>
			<Card.Title class="text-center">{$t('menu.title')}</Card.Title>
			<Card.Description class="text-center">{$t('menu.description')}</Card.Description>
		</Card.Header>
		<Card.Content class="text-center">
			{#each contacts as param}
				<Button
					variant="outline"
					class="m-1 rounded-lg ring-2 ring-indigo-700"
					on:click={() => handleClick(param.value)}
				>
					{#if translateDict[param.name]}
						{translateDict[param.name]}
					{:else}
						{param.name}
					{/if}
				</Button>
				{#if expandedContact === param.value}
					<p class="my-1 w-auto rounded bg-zinc-800 p-2 text-sm">{param.value}</p>
				{/if}
			{/each}
		</Card.Content>
	</Card.Root>
</div>
