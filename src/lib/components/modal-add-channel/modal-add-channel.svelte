<script>
	import { Button, buttonVariants } from '$lib/components/ui/button';

	import * as Dialog from '$lib/components/ui/dialog';
	import Combox from '$lib/components/combobox/combox.svelte';
	import SheetInputs from '$lib/components/sheet-inputs/sheet-inputs.svelte';

	export let locationGroupList;
	export let currentLocation;
	export let allLocations;
	export let userBots;
	export let updateInputListLocation;
	export let updateNewChannelBot;
	export let newChannel;
	export let channelInputlist;
	export let modalFunctions;
</script>

<Dialog.Root>
	<Dialog.Trigger class="rounded-submit shadow-2xl">+</Dialog.Trigger>
	<Dialog.Content class="flex min-h-[50vh] flex-col items-center">
		<Dialog.Header>
			<Dialog.Title>Додати новий канал</Dialog.Title>
		</Dialog.Header>
		<Combox
			list={locationGroupList}
			key={'parsing_domain'}
			labelKey={'parsing_domain'}
			title="Домен для парсингу"
			addItem={(value) => updateInputListLocation(value, 'parsing_domain')}
		/>
		{#if currentLocation.parsing_domain && allLocations.length}
			<Combox
				list={allLocations}
				key={'region'}
				labelKey={'region'}
				title="Перелік регіонів"
				addItem={(value) => updateInputListLocation(value, 'region')}
			/>
		{/if}
		{#if currentLocation.parsing_domain && currentLocation.region && allLocations.length}
			<Combox
				list={allLocations.filter((location) => location.region === currentLocation.region)}
				key={'id'}
				labelKey={'city'}
				title="Перелік міст"
				addItem={(value) => updateInputListLocation(value, 'location_id')}
			/>
		{/if}
		{#if currentLocation.parsing_domain && currentLocation.region && currentLocation.location_id && allLocations.length && userBots.length}
			<Combox
				list={userBots}
				key={'id'}
				labelKey={'username'}
				title="Перелік ботів"
				addItem={(value) => updateNewChannelBot(value)}
			/>
		{/if}
		{#if currentLocation.parsing_domain && currentLocation.region && currentLocation.location_id && newChannel.bot_id && allLocations.length}
			<SheetInputs
				buttonText="Додати опис каналу"
				title="Новий канал"
				description="Заповніть поля стосовно вашого каналу"
				inputList={channelInputlist}
				originalData={newChannel}
				onSubmit={modalFunctions.submitChannelForm}
			/>
		{/if}
	</Dialog.Content>
</Dialog.Root>
