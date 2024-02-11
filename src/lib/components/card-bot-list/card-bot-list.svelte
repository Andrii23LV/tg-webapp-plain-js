<!-- CardList.svelte -->
<script>
	import CardBot from '$lib/components/card-bot/card-bot.svelte';
	import { filterList } from '$lib/utils/filterList';

	export let deleteCard;
	export let list;
	export let inputText;
</script>

<div class="flex flex-col items-center gap-2">
	{#if filterList(list, inputText).length > 0}
		<div class="flex flex-col items-center gap-2">
			{#each filterList(list, inputText) as item (item.id)}
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
