<!-- CardInfo.svelte -->

<script>
	export let item;
</script>

<div class="flex-1">
	<p class="text-xs leading-relaxed"><strong>@{item.username}</strong></p>
	<p class="text-xs leading-relaxed"><strong>ID</strong> #{item.chat_id}</p>
	{#if item.bot}
		<p class="text-xs leading-relaxed"><strong>Бот</strong> @{item.bot.username}</p>
	{:else}
		<p class="text-xs text-red-400">Додайте бота</p>
	{/if}
</div>
