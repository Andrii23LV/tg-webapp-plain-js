<!-- CardList.svelte -->
<script>
	import Card from '$lib/components/card/card.svelte'; // Update the path accordingly

	export let selectChannel;
	export let deleteChannel;
	export let toggleChannelAutoPost;
	export let onHandPost = null;
	export let onSelectInterval = null;

	export let list;
	export let selectedList = null;
	export let selectedInterval = null;

	export let type;
</script>

<div class="flex flex-col items-center gap-2 py-2">
	{#if list.length > 0}
		<div class="flex flex-col items-center gap-2">
			{#each list as item (item.id)}
				{#if !type || (type === 'archived' && item.autopost) || (type === 'unarchived' && !item.autopost)}
					<div class="items-center">
						<Card
							{item}
							{selectedInterval}
							{selectedList}
							{onSelectInterval}
							onSelect={selectChannel}
							onDelete={deleteChannel}
							onToggleAuto={toggleChannelAutoPost}
							{onHandPost}
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
