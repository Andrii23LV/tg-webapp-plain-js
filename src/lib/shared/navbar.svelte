<!-- Toolbar.svelte -->

<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Icon from '$lib/shared/icon.svelte';
</script>

<div class="flex h-[65px] w-full items-center gap-2 border-2 border-b-green-500 bg-zinc-800 py-2">
	<div class="m-auto flex flex-row items-center justify-center gap-2">
		<a on:click={() => goto('/')} href="/" class:active-link={$page.url.pathname === '/'}>
			<Icon type="profile" />
		</a>

		<a
			on:click={() => goto('/channels')}
			href="/channels"
			class:active-link={$page.url.pathname === '/channels'}
		>
			<Icon type="channels" />
		</a>
		<a
			on:click={() => goto('/archive')}
			href="/archive"
			class:active-link={$page.url.pathname === '/archive'}
		>
			<Icon type="archive" />
		</a>
		<a
			on:click={() => goto('/locations')}
			href="/locations"
			class:active-link={$page.url.pathname === '/locations'}
		>
			<Icon type="location" />
		</a>
		<a
			on:click={() => goto('/bots')}
			href="/bots"
			class:active-link={$page.url.pathname == '/bots'}
		>
			<Icon type="bot" />
		</a>
	</div>
</div>
