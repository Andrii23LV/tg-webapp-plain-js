<script>
	import CardBot from '$lib/components/card-bot/card-bot.svelte';

	export let deleteCard;
	export let list;
</script>

<div class="flex flex-col items-center gap-2">
	{#if list.length > 0}
		<div class="flex flex-col items-center gap-2">
			{#each list as item (item.id)}
				<div class="items-center">
					<CardBot {item} onDelete={deleteCard} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex flex-col items-center gap-2">
			<p class="text-zinc-50">Нічого не знайдено</p>
		</div>
	{/if}
</div>
