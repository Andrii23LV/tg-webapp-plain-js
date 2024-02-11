<!-- Toolbar.svelte -->

<script>
	import { goto } from '$app/navigation';

	import ToolbarInput from './toolbar-input.svelte';
	import Icon from '$lib/shared/icon.svelte';
	import Button from '$lib/shared/button.svelte';

	let isSearchInputVisible = false;

	export let type;
	export let inputText;
	export let selectedList = [];
	export let onAutoPostList;
	export let onInputChange;

	function toggleSearchInput() {
		isSearchInputVisible = !isSearchInputVisible;
	}
</script>

<div
	class="flex min-h-[65px] w-full flex-col items-center gap-2 border-2 border-b-green-500 bg-zinc-800 py-2"
>
	<div class="m-auto flex flex-row items-center justify-center gap-2">
		<a on:click={() => goto('/')} href="/">
			<Icon type="profile" />
		</a>

		<Button
			handler={() => onAutoPostList(selectedList, undefined)}
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

		<!-- <button type="button" on:click={toggleSearchInput}><Icon type="search" /></button> -->
	</div>

	{#if isSearchInputVisible}
		<ToolbarInput {inputText} {onInputChange} />
	{/if}
</div>
