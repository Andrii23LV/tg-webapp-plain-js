<!-- Icon.svelte -->
<script>
	import Arch from './assets/archive.svelte';
	import Channel from './assets/channel.svelte';
	import Search from './assets/search.svelte';
	import Profile from './assets/profile.svelte';
	import Bot from './assets/bot.svelte';
	import Location from './assets/location.svelte';
	export let type = '';
</script>

<div class={`cursor-pointer rounded-lg bg-zinc-600 p-1 hover:bg-zinc-500 border border-zinc-500`}>
	{#if type === 'archive'}
		<Arch />
	{/if}
	{#if type === 'channels'}
		<Channel />
	{/if}
	{#if type === 'search'}
		<Search />
	{/if}
	{#if type === 'profile'}
		<Profile />
	{/if}
	{#if type === 'bot'}
		<Bot />
	{/if}
	{#if type === 'location'}
		<Location />
	{/if}
</div>
