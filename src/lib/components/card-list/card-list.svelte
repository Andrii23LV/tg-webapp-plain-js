<!-- CardList.svelte -->
<script>
	import Card from '$lib/components/card/card.svelte'; // Update the path accordingly
	import { filterList } from '$lib/utils/filterList';

	export let selectCard;
	export let deleteCard;
	export let list;
	export let selectedList;
	export let handleToggleAutoPost;
	export let handlePostAction;
	export let filterText;
	export let filterType;

	export let type;
</script>

<div class="flex flex-col items-center gap-2">
	{#if filterList(list, filterText, filterType).length > 0}
		<div class="flex flex-col items-center gap-2">
			{#each filterList(list, filterText, filterType) as item (item.id)}
				{#if !type || (type === 'archived' && item.autopost) || (type === 'unarchived' && !item.autopost)}
					<div class="items-center">
						<Card
							{item}
							{selectedList}
							onSelect={selectCard}
							onDelete={deleteCard}
							onToggleAuto={handleToggleAutoPost}
							onHandPost={handlePostAction}
						/>
					</div>
				{/if}
			{/each}
		</div>
	{:else}
		<div class="flex flex-col items-center gap-2">
			<p class="text-zinc-50">Нічого не знайдено</p>
		</div>
	{/if}
</div>
