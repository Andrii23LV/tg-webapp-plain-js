<!-- Toolbar.svelte -->

<script>
	import { goto } from '$app/navigation';
	import Icon from '$lib/shared/icon.svelte';
	import Button from '$lib/shared/button.svelte';

	export let type;
	export let selectedList = [];
	export let toggleChannelsAutoPost;
</script>

<div
	class="flex min-h-[65px] w-full flex-col items-center gap-2 border-2 border-b-green-500 bg-zinc-800 py-2"
>
	<div class="m-auto flex flex-row items-center justify-center gap-2">
		<a on:click={() => goto('/')} href="/">
			<Icon type="profile" />
		</a>

		<Button
			handler={() => toggleChannelsAutoPost(selectedList, type === 'main' ? true : false)}
			disabled={selectedList?.length ? false : true}
			title={type === 'main'
				? `Авто-постинг для ${selectedList?.length}`
				: `Ручний постинг для ${selectedList?.length}`}
			style={'submit'}
			type="button"
		/>

		{#if type === 'main'}
			<a on:click={() => goto('/archive')} href="/archive">
				<Icon type="archive" />
			</a>
		{:else}
			<a on:click={() => goto('/channels')} href="/channels">
				<Icon type="channels" />
			</a>
		{/if}
	</div>
</div>
