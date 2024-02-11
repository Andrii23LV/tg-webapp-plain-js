<script>
	import * as Dialog from '$lib/components/ui/dialog';

	export let channel;
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="mt-0 h-[16px] w-[16px] rounded-full border border-zinc-500 text-xs text-zinc-500"
		>i</Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Детальна інформація</Dialog.Title>
		</Dialog.Header>
		<p class="text-xs leading-relaxed"><strong>Назва: </strong>{channel.title}</p>
		<p class="text-xs leading-relaxed"><strong>@{channel.username}</strong></p>
		<p class="text-xs leading-relaxed"><strong>ID: </strong> #{channel.chat_id}</p>
		<p class="text-xs leading-relaxed"><strong>Регіон: </strong>{channel.location.region}</p>
		<p class="text-xs leading-relaxed"><strong>Місто: </strong>{channel.location.city}</p>
		{#if channel.bot}
			<p class="text-xs leading-relaxed"><strong>Бот: </strong> @{channel.bot.username}</p>
		{:else}
			<p class="text-xs text-red-400">Додайте бота</p>
		{/if}
	</Dialog.Content>
</Dialog.Root>
